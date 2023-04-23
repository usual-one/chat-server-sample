import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import {IRawMessage} from '../models/message';
import {MessageService} from '../services/message.service';


@WebSocketGateway()
export class MessageGateway {

  constructor(
    private readonly service: MessageService,
  ) {}

  @SubscribeMessage('message')
  public handleReceive(client: any, payload: IRawMessage): string {
    const message = this.service.create(payload);
    return 'Hello world!';
  }

}
