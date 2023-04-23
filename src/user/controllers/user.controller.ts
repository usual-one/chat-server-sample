import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {IRawUser, IUser} from '../models/user';
import {UserService} from '../services/user.service';


@Controller('user')
export class UserController {

  constructor(
    private readonly service: UserService,
  ) {}

  @Post()
  public create(
    @Body()
    raw: IRawUser,
  ): IUser {
    return this.service.create(raw);
  }

  @Get(':id')
  public get(
    @Param('id')
    id: string,
  ): IUser {
    return this.service.get(id);
  }

}
