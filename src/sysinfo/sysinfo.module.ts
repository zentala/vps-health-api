import { Module } from '@nestjs/common';
import { SysInfoController } from './sysinfo.controller';
import { SysInfoService } from './sysinfo.service';

@Module({
  controllers: [SysInfoController],
  providers: [SysInfoService]
})
export class SysinfoModule {}
