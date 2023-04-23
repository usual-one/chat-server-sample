export interface IRawMessage {
  userId: string;
  text: string;
  replyToId?: string;
}

export interface IMessage extends IRawMessage {
  id: string;
  datetime: string;
}
