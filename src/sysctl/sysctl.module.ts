import { Module } from '@nestjs/common';
import { SysCtlController } from './sysctl.controller';
import { SysCtlService } from './sysctl.service';

@Module({
  controllers: [SysCtlController],
  providers: [SysCtlService],
})
export class SysCtlModule {}
