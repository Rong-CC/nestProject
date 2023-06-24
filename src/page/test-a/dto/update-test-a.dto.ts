import { PartialType } from '@nestjs/mapped-types';
import { CreateTestADto } from './create-test-a.dto';

export class UpdateTestADto extends PartialType(CreateTestADto) {}
