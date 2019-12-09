import { Module } from '@nestjs/common';
import { TrotController } from './controller/trot';
import { TrotService } from './service/trot';
import { Trot } from './entity/trot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Trot]),
],
  controllers: [TrotController],
  providers: [TrotService],
})
export class TrotModule {}
