import { Controller, Get } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Inject } from '@nestjs/common';
import { CreateUserEvent } from './create-user-event';

@Controller()
export class AppController {
  constructor(readonly appService: AppService) {}

  // @Get()
  // getHello() {
  //   return this.appService.send('producer', {
  //     message: this.appService.getHello(),
  //   });
  // }
  // async onApplicationBootstrap() {
  //   await this.client.connect();
  // }

  @EventPattern('notification_created')
  handleUser(data: CreateUserEvent) {
    return this.appService.handleNotification(data);
  }
}
