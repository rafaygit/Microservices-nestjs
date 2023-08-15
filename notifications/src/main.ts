import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://ndwhiwzp:moSZtrVeHzVWijXlzMDRi9-No_fFVCu_@armadillo.rmq.cloudamqp.com/ndwhiwzp',
      ],
      queue: 'MS_queue',
    },
    queueOptions: {
      durable: true,
    },
  });
  app.listen();
}
bootstrap();
