import { Controller, Get } from '@nestjs/common';
import { SysInfoService } from './sysinfo.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('sysinfo')
@Controller('api/sysinfo')
export class SysInfoController {
  constructor(private readonly sysInfoService: SysInfoService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns detailed information about the system.',
  })
  async getSystemInfo() {
    return await this.sysInfoService.getSystemInfo();
  }
}
