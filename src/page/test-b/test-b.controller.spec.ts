import { Test, TestingModule } from '@nestjs/testing';
import { TestBController } from './test-b.controller';
import { TestBService } from './test-b.service';

describe('TestBController', () => {
  let controller: TestBController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestBController],
      providers: [TestBService],
    }).compile();

    controller = module.get<TestBController>(TestBController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
