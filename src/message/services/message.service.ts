import { Injectable } from '@nestjs/common';
import {v4} from 'uuid';
import {IMessage, IRawMessage} from '../models/message';


@Injectable()
export class MessageService {

  public create(raw: IRawMessage): IMessage {
    return {
      ...raw,
      id: v4(),
      datetime: (new Date()).toISOString(),
    };
  }

}
