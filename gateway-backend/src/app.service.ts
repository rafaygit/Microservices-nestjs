import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';
import { CreateUserDto } from './create-user-dto';
import { CreateUserEvent } from './create-user-event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('NOTIF_SERVICE') private readonly notifClient: ClientProxy,
    @Inject('ANALYTICS_SERVICE') private readonly analyticsClient: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async sendNotification(createUserDto: CreateUserDto) {
    //pushes into users array
    this.users.push(createUserDto);
    //2nd arg is payload (data)
    this.notifClient.emit(
      'notification_created',
      new CreateUserEvent(createUserDto.email),
    );
  }
  async sendAnalytics(createUserDto: CreateUserDto) {
    this.analyticsClient.emit(
      'analytics_created',
      new CreateUserEvent(createUserDto.email),
    );
  }

  async getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }
}
