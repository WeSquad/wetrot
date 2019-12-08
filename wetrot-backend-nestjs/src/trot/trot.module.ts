import { Module } from '@nestjs/common';
import { TrotController } from './controller/trot';
import { Trot } from './entity/trot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrotService } from './service/trot';

@Module({
  imports: [TypeOrmModule.forFeature([Trot]),
  ],
  providers: [TrotService],
  controllers: [TrotController],
})
export class TrotModule {}
