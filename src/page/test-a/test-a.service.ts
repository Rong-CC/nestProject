/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-06-17 14:24:44
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-06-17 14:30:03
 */
import { Injectable } from '@nestjs/common';
import { CreateTestADto } from './dto/create-test-a.dto';
import { UpdateTestADto } from './dto/update-test-a.dto';
import { TestBService } from 'src/page/test-b/test-b.service';


@Injectable()
export class TestAService {
  constructor(private readonly testBService: TestBService) {
    
   }
  create(createTestADto: CreateTestADto) {
    return 'This action adds a new testA';
  }

  findAll() {
    return `This action returns all testA + ${this.testBService.findAll()}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testA`;
  }

  update(id: number, updateTestADto: UpdateTestADto) {
    return `This action updates a #${id} testA`;
  }

  remove(id: number) {
    return `This action removes a #${id} testA`;
  }
}
