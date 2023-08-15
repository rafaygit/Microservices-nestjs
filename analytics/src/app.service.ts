import { Injectable, Inject } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ClientProxy } from '@nestjs/microservices/client';
import { CreateUserEvent } from './create-user-event';

@Injectable()
export class AppService {
  constructor() {}
  private readonly analytics: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }
  handleAnalytics(data: CreateUserEvent) {
    console.log('Analytics created!');
    this.analytics.push({
      email: data.email,
      timestamp: new Date(),
    });
  }
  getAnalytics()
  {
    return this.analytics;
  }
}
