import { SUser } from 'src/infrastructure/db/mongodb/schemas/user.schema';

export const USER_SERVICE = 'IUserService';

export interface IUserService {
  create(user: SUser): Promise<SUser>;
  findByName(name: string): Promise<SUser[]>;
}
