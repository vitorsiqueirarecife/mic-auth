import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IUser } from '../interfaces/user.interface';

export abstract class AUser implements IUser {
  abstract id: string;
  abstract name: string;
  abstract email: string;
  abstract password: string;
}

@ObjectType()
export class User implements AUser {
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
