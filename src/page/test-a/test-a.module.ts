/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-06-17 14:24:44
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-06-17 14:32:21
 */
import { Module } from '@nestjs/common';
import { TestBModule } from 'src/page/test-b/test-b.module';
import { TestAService } from './test-a.service';
import { TestAController } from './test-a.controller';

@Module({
  imports: [TestBModule],
  controllers: [TestAController],
  providers: [TestAService]
})
export class TestAModule {}
