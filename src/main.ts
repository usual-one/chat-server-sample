import { NestFactory } from '@nestjs/core';
import {WsAdapter} from '@nestjs/platform-ws';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new WsAdapter())
  app.enableCors();
  app.setGlobalPrefix('api')
  await app.listen(3080);
}
bootstrap();
