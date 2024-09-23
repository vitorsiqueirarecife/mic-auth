import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserDto } from 'src/application/dtos/create-user.dto';
import { User } from 'src/domain/entity/user.entity';
import { IUser } from 'src/domain/entity/user.interface';

@Resolver(() => User)
export class UserResolver {
  constructor() {}

  @Query(() => [User])
  async users(): Promise<IUser[]> {
    return [
      {
        email: '',
        id: '',
        name: '',
        password: '',
      },
    ];
  }

  @Mutation(() => User)
  async createUser(
    @Args('input')
    { name, email, password }: CreateUserDto,
  ): Promise<IUser> {
    return {
      id: '1',
      name,
      email,
      password,
    } as IUser;
  }
}
