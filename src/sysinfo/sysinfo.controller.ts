import { Controller, Get } from '@nestjs/common';
import { SysInfoService } from './sysinfo.service';

@Controller('api/sysinfo')
export class SysInfoController {
  constructor(private readonly sysInfoService: SysInfoService) {}

  @Get()
  async getSystemInfo() {
    return await this.sysInfoService.getSystemInfo();
  }
}
