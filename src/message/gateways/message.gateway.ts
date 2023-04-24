import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import {IRawMessage} from '../models/message';
import {MessageService} from '../services/message.service';
import { WebSocket } from 'ws';


@WebSocketGateway(3081, { transports: 'websockets' })
export class MessageGateway {

  constructor(
    private readonly service: MessageService,
  ) {}

  private readonly userMap = new Map<string, WebSocket>();

  @SubscribeMessage('auth')
  public handleAuth(
    @MessageBody() body: { userId: string },
    @ConnectedSocket() socket: WebSocket,
  ): void {
    this.userMap.set(body.userId, socket);
  }

  @SubscribeMessage('message')
  public handleReceive(
    @MessageBody() body: IRawMessage,
  ): void {
    const message = this.service.create(body);
    for (const connection of this.userMap.values()) {
      connection.send(JSON.stringify({
        event: 'message',
        data: message,
      }));
    }
  }

}
