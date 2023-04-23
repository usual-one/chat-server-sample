export interface IRawUser {
  name: string;
  bio?: string;
  avatar?: string;
}

export interface IUser extends IRawUser {
  id: string;
}
