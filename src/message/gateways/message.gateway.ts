import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import {IRawMessage} from '../models/message';
import {MessageService} from '../services/message.service';
import { WebSocket } from 'ws';


@WebSocketGateway(3081, { transports: 'websockets' })
export class MessageGateway {

  constructor(
    private readonly service: MessageService,
  ) {}

  @SubscribeMessage('message')
  public handleReceive(
    @MessageBody() body: IRawMessage,
    @ConnectedSocket() socket: WebSocket,
  ): void {
    const message = this.service.create(body);
    socket.send(JSON.stringify({
      event: 'message',
      data: message,
    }));
  }

}
