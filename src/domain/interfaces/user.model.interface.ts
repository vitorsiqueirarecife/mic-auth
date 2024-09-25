import { SUser } from 'src/infrastructure/db/mongodb/schemas/user.schema';

export interface IUserModel {
  create(user: SUser): Promise<SUser>;
  findByName(name: string): Promise<SUser[]>;
}
