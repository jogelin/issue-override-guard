import { Module } from '@nestjs/common';
import { AppController, OtherController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, OtherController],
  providers: [AppService],
})
export class AppModule {}
