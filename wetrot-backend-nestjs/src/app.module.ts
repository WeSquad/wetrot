import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TrotModule } from './trot/trot.module';

@Module({
  imports: [UserModule, TrotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
