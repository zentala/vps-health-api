import { Controller, Get, Param } from '@nestjs/common';
import { SysCtlService } from './sysctl.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('sysctl')
@Controller('api/sysctl')
export class SysCtlController {
  constructor(private readonly sysCtlService: SysCtlService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns the statuses of all monitored system services.',
  })
  async getAllServices() {
    return this.sysCtlService.getAllServicesStatus();
  }

  @Get('/:serviceName')
  @ApiResponse({
    status: 200,
    description: 'Returns the status and information of a specified system service.',
  })
  async getServiceStatus(@Param('serviceName') serviceName: string) {
    return this.sysCtlService.getServiceStatus(serviceName);
  }
}
