import { PartialType } from '@nestjs/mapped-types';
import { CreateTestBDto } from './create-test-b.dto';

export class UpdateTestBDto extends PartialType(CreateTestBDto) {}
