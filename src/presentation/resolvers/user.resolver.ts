import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from 'src/application/services/user.service';
import { AUser, User } from 'src/domain/entities/user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'searchUsers' })
  async searchUsers(@Args('name') name: string): Promise<AUser[]> {
    return this.userService.findUsersByName(name);
  }
}
