/*
 * @Description:
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-05-20 13:30:38
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-06-17 13:31:19
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './page/base/cats.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { AaaModule as PageAaaModule } from './page/aaa/aaa.module';
import { TestBModule } from './page/test-b/test-b.module';
import { TestAModule } from './page/test-a/test-a.module';

@Module({
  imports: [AaaModule, TestBModule, PageAaaModule, TestAModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
