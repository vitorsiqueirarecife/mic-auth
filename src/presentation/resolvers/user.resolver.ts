import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from 'src/application/services/user.service';
import { User } from 'src/domain/entities/user.entity';
import { IUser } from 'src/domain/interfaces/user.interface';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'searchUsers' })
  async searchUsers(@Args('name') name: string): Promise<IUser[]> {
    return this.userService.findByName(name);
  }
}
