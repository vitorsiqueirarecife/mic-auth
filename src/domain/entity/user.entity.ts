import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IUser } from './user.interface';

@ObjectType()
export class User implements IUser {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  passwordConfirmation: string;
}
