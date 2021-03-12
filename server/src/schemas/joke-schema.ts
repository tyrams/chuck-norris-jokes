import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class JokeSchema {
  @Field(() => String)
  icon_url: string;

  @Field(() => String)
  url: string;

  @Field(() => String)
  value: string;
}
