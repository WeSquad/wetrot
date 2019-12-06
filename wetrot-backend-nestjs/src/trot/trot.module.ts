import { Module } from '@nestjs/common';
import { TrotController } from './controller/trot';

@Module({
  controllers: [TrotController],
})
export class TrotModule {}
