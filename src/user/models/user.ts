import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";


export interface IRawUser {
  name: string;
  bio?: string;
  avatar?: string;
}

export interface IUser extends IRawUser {
  id: string;
}


// #region Swagger UI models

export class IRawUser {
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  bio?: string;
  @ApiPropertyOptional()
  avatar?: string;
}

export class IUser extends IRawUser {
  @ApiProperty()
  id: string;
}

// #endregion
