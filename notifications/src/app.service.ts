import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';
import { CreateUserEvent } from './create-user-event';

@Injectable()
export class AppService {
  constructor() {}
  getHello(): string {
    return 'Hello World!';
  }

  handleNotification(data: CreateUserEvent) {
    return console.log('Notification Created!');
  }
}
