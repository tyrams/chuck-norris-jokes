import React, { useState } from "react";
import Categories from "../../components/categories/categories";
import Jokes from "../../components/jokes/jokes";
import { HomeContainer, Divider } from "./styles";

const HomePage = () => {
  const [category, setCategory] = useState("");
  const handleFetchJokes = (category: string) => {
    setCategory(category);
  };

  return (
    <HomeContainer>
      <Categories handleFetchJokes={handleFetchJokes} />
      <Divider />
      <Jokes category={category} />
    </HomeContainer>
  );
};

export default HomePage;
