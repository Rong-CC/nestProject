/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-06-17 13:15:59
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-06-17 14:22:01
 */
import { Module } from '@nestjs/common';
import { TestBService } from './test-b.service';
import { TestBController } from './test-b.controller';

@Module({
  controllers: [TestBController],
  providers: [TestBService],
  exports: [TestBService]
})
export class TestBModule {}
