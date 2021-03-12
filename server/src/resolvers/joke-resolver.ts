import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { JokeSchema } from "../schemas/joke-schema";

@Resolver()
export class JokeResolver {
  @Query(() => [JokeSchema])
  async jokes(@Arg("category", { nullable: false }) category: string) {
    const response = await axios
      .get(`https://api.chucknorris.io/jokes/search?query=${category}`)
      .then((res) => res.data);
    return response?.result;
  }
}
