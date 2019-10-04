import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomGuard } from './custom.guard';

@Controller('/hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(CustomGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('/other')
export class OtherController {

  @Get()
  @UseGuards(CustomGuard)
  getHello(): string {
    return 'other';
  }
}
