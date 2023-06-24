
import { Injectable } from '@nestjs/common';
import { CreateTestBDto } from './dto/create-test-b.dto';
import { UpdateTestBDto } from './dto/update-test-b.dto';

@Injectable()
export class TestBService {
  create(createTestBDto: CreateTestBDto) {
    return 'This action adds a new testB';
  }

  findAll() {
    return `This action returns all testB All`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testB`;
  }

  update(id: number, updateTestBDto: UpdateTestBDto) {
    return `This action updates a #${id} testB`;
  }

  remove(id: number) {
    return `This action removes a #${id} testB`;
  }
}
