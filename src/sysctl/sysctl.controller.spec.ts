import { Test, TestingModule } from '@nestjs/testing';
import { SysctlController } from './sysctl.controller';

describe('SysctlController', () => {
  let controller: SysctlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SysctlController],
    }).compile();

    controller = module.get<SysctlController>(SysctlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
