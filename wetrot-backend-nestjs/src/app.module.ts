import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrotModule } from './trot/trot.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [TrotModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: `${process.env.HOST}`,
      port: Number(process.env.PORT),
      username: `${process.env.USERNAME}`,
      password: `${process.env.PASSWORD}`,
      database: `${process.env.DATABASE}`,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
