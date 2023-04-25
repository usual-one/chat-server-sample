import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {IRawUser, IUser} from '../models/user';
import {UserService} from '../services/user.service';


@Controller('user')
@ApiTags('users')
export class UserController {

  constructor(
    private readonly service: UserService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ type: IUser })
  public create(
    @Body()
    raw: IRawUser,
  ): IUser {
    return this.service.create(raw);
  }

  @Get(':id')
  @ApiResponse({ type: IUser })
  public get(
    @Param('id')
    id: string,
  ): IUser {
    return this.service.get(id);
  }

}
