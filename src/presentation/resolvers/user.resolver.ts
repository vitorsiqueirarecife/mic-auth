import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from 'src/application/services/user.service';
import { AUser } from 'src/domain/entities/user.entity';

@Resolver(() => AUser)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [AUser], { name: 'searchUsers' })
  async searchUsers(@Args('name') name: string): Promise<AUser[]> {
    return this.userService.findUsersByName(name);
  }
}
