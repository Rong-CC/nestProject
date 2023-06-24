import { Test, TestingModule } from '@nestjs/testing';
import { TestBService } from './test-b.service';

describe('TestBService', () => {
  let service: TestBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestBService],
    }).compile();

    service = module.get<TestBService>(TestBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
