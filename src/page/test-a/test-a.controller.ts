import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestAService } from './test-a.service';
import { CreateTestADto } from './dto/create-test-a.dto';
import { UpdateTestADto } from './dto/update-test-a.dto';

@Controller('test-a')
export class TestAController {
  constructor(private readonly testAService: TestAService) {}

  @Post()
  create(@Body() createTestADto: CreateTestADto) {
    return this.testAService.create(createTestADto);
  }

  @Get()
  findAll() {
    return this.testAService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testAService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestADto: UpdateTestADto) {
    return this.testAService.update(+id, updateTestADto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testAService.remove(+id);
  }
}
