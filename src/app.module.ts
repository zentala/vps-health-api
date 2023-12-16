import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SysinfoModule } from './sysinfo/sysinfo.module';
import { SysCtlService } from './sysctl/sysctl.service';
import { SysCtlModule } from './sysctl/sysctl.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SysinfoModule, 
    SysCtlModule
  ],
  controllers: [AppController],
  providers: [AppService, SysCtlService],
})
export class AppModule {}
