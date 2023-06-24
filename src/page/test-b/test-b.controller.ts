/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-06-17 13:15:59
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-06-17 13:51:17
 */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestBService } from './test-b.service';
import { CreateTestBDto } from './dto/create-test-b.dto';
import { UpdateTestBDto } from './dto/update-test-b.dto';
@Controller('test-b')
export class TestBController {
  constructor(private readonly testBService: TestBService) {}

  @Post()
  create(@Body() createTestBDto: CreateTestBDto) {
    return this.testBService.create(createTestBDto);
  }

  @Get()
  findAll() {
    console.log('test-b.controller.ts: findAll()')
    debugger
    console.log('test-b.controller.ts: 11()')
    return this.testBService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    debugger
    return this.testBService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestBDto: UpdateTestBDto) {
    return this.testBService.update(+id, updateTestBDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testBService.remove(+id);
  }
}
