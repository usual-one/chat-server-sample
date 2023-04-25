import { NestFactory } from '@nestjs/core';
import {WsAdapter} from '@nestjs/platform-ws';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useWebSocketAdapter(new WsAdapter())

  app.enableCors();

  app.setGlobalPrefix('api')
  
  const config = new DocumentBuilder()
    .setTitle('Башня chat')
    .setDescription('Описание API для занятия 5')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3080);
}
bootstrap();
