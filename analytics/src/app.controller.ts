import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './create-user-event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('analytics_created')
  handleAnalytics(data: CreateUserEvent) {
    this.appService.handleAnalytics(data);
  }
  @MessagePattern({cmd: 'get_analytics'})
  getAnalytics()
  {
    return this.appService.getAnalytics();
  }
}
