import { ConsoleLogger, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

@Injectable()
export class SysCtlService {
  private servicesToCheck: string[];

  constructor(private configService: ConfigService) {
    const services = this.configService.get<string>('SERVICES_TO_CHECK');
    this.servicesToCheck = services.split(',');
  }

  public async getServiceStatus(serviceName: string): Promise<any> {
    try {
      const { stdout, stderr } = await execAsync(`systemctl status ${serviceName}`);
      const status = stdout ? this.parseServiceStatus(stdout) : 'unknown';
      return {
        status,
        output: stdout.trim() || stderr.trim()
      };
    } catch (error) {
      return this.handleServiceStatusError(error);
    }
  }
  
  private handleServiceStatusError(error: any): any {
    if (error.stderr && error.stderr.includes('could not be found')) {
      return {
        status: 'not found',
        output: error.stderr.trim()
      };
    }
    return {
      status: 'error',
      output: error.message
    };
  }

  private parseServiceStatus(stdout: string): string {
    const statusMap = [
      { key: 'active (running)', value: 'active' },
      { key: 'inactive (dead)', value: 'inactive' },
      { key: 'active (exited)', value: 'active (exited)' },
      { key: 'failed', value: 'failed' },
      { key: 'activating', value: 'activating' },
      { key: 'deactivating', value: 'deactivating' }
    ];

    for (const status of statusMap) {
      if (stdout.includes(status.key)) {
        return status.value;
      }
    }

    return 'unknown';
  }

  public async getAllServicesStatus(): Promise<any[]> {
    const servicesStatuses = await Promise.all(
      this.servicesToCheck.map(async (serviceName) => {
        const status = await this.getServiceStatus(serviceName);
        return {
          serviceName,
          status: status.status,
          link: `/api/sysctl/${serviceName}`
        };
      })
    );
    return servicesStatuses;
  }
}
