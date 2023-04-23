import { Injectable } from '@nestjs/common';
import {v4} from 'uuid';
import {IRawUser, IUser} from '../models/user';


@Injectable()
export class UserService {

  private readonly map = new Map<string, IUser>();

  public create(raw: IRawUser): IUser {
    const id = v4();
    const entity = { ...raw, id };

    this.map.set(id, entity);
    return entity;
  }

  public get(id: string): IUser | null {
    return this.map.get(id) ?? null;
  }

}
