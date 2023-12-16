import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export interface ServiceStatus {
  status: string;
  output: string;
}

export interface ServiceInfo {
  serviceName: string;
  status: string;
  link: string;
}

interface ServiceMap {
  key: string;
  value: string;
}

@Injectable()
export class SysCtlService {
  private servicesToCheck: string[];

  constructor(private configService: ConfigService) {
    const services = this.configService.get<string>('SERVICES_TO_CHECK', 'nginx,apache2,pm2');
    this.servicesToCheck = services.split(',');
  }

  public async getServiceStatus(serviceName: string): Promise<ServiceStatus> {
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
  
  private handleServiceStatusError(error: any): ServiceStatus {
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
    const statusMap: ServiceMap[] = [
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

  public async getAllServicesStatus(): Promise<ServiceInfo[]> {
    return Promise.all(
      this.servicesToCheck.map(async (serviceName) => {
        const statusResponse = await this.getServiceStatus(serviceName);
        return {
          serviceName,
          status: statusResponse.status,
          link: `/api/sysctl/${serviceName}`
        };
      })
    );
  }
}
