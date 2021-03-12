import axios from "axios";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class CategoryResolver {
  @Query(() => [String])
  async categories() {
    const response = await axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.data);
    return response;
  }
}
