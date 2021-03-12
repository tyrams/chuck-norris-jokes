import { CircularProgress } from "@material-ui/core";
import JokeCard from "./joke-card/joke-card";
import { JokesContainer, Contiainer, Heading, ErrorText } from "./styles";
import { gql, useQuery } from "@apollo/client";
import { IJoke } from "../../commons/interfaces/joke-interface";

interface IProps {
  category: string;
}

const GET_JOKES = gql`
  query jokes($category: String!) {
    jokes(category: $category) {
      icon_url
      value
      url
    }
  }
`;

const displaySpinner = () => {
  return (
    <Contiainer>
      <Heading>Fetching Jokes..</Heading>
      <CircularProgress color="inherit" size={35} />
    </Contiainer>
  );
};

const displayError = () => {
  return (
    <Contiainer>
      <ErrorText>
        Opps! Something went wrong, oh wait - try click on one of the category
        chip buttons, if unseccessfully; oh well perhaps something is really
        wrong!
      </ErrorText>
    </Contiainer>
  );
};

const Jokes = ({ category }: IProps) => {
  const _category = category === undefined ? "music" : category;
  const { loading, error, data } = useQuery(GET_JOKES, {
    variables: { category: _category },
  });

  if (error) return displayError();
  if (loading) return displaySpinner();

  return (
    <JokesContainer>
      {data?.jokes?.map((joke: IJoke, index: any) => (
        <JokeCard
          key={index}
          icon_url={joke.icon_url}
          url={joke.url}
          value={joke.value}
        />
      ))}
    </JokesContainer>
  );
};

export default Jokes;
