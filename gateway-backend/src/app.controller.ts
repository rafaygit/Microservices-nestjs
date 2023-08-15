import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './create-user-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('notifications')
  createUser(@Body() createUserDto: CreateUserDto) {
    this.appService.sendNotification(createUserDto);
  }
  @Post('analytics')
  createAnalytics(@Body() createUserDto: CreateUserDto) {
    this.appService.sendAnalytics(createUserDto);
  }
  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
