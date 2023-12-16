import { Test, TestingModule } from '@nestjs/testing';
import { SysctlService } from './sysctl.service';

describe('SysctlService', () => {
  let service: SysctlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SysctlService],
    }).compile();

    service = module.get<SysctlService>(SysctlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
