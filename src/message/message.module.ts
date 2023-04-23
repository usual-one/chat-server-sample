import { Module } from '@nestjs/common';
import { MessageService } from './services/message.service';
import { MessageGateway } from './gateways/message.gateway';

@Module({
  providers: [MessageService, MessageGateway]
})
export class MessageModule {}
