import { Controller, Get, Param } from '@nestjs/common';
import { SysCtlService } from './sysctl.service';

@Controller('api/sysctl')
export class SysCtlController {
  constructor(private readonly sysCtlService: SysCtlService) {}

  @Get()
  async getAllServices() {
    return this.sysCtlService.getAllServicesStatus();
  }

  @Get('/:serviceName')
  async getServiceStatus(@Param('serviceName') serviceName: string) {
    return this.sysCtlService.getServiceStatus(serviceName);
  }
}
