import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIF_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://ndwhiwzp:moSZtrVeHzVWijXlzMDRi9-No_fFVCu_@armadillo.rmq.cloudamqp.com/ndwhiwzp',
          ],
          queue: 'MS_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
      {
        name: 'ANALYTICS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://ndwhiwzp:moSZtrVeHzVWijXlzMDRi9-No_fFVCu_@armadillo.rmq.cloudamqp.com/ndwhiwzp',
          ],
          queue: 'MS_queue',
          queueOptions: {
            durable: true,
          },
        },
        
      }
 
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
