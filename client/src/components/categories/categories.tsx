import {} from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";
import { Container, StyledChip, Heading } from "./styles";

interface IProps {
  handleFetchJokes: (args: string) => void;
}

const GET_CATEGORIES = gql`
  query categories {
    categories
  }
`;

const Categories = ({ handleFetchJokes }: IProps) => {
  const { data } = useQuery(GET_CATEGORIES);

  const fetchJokes = (category: string) => {
    handleFetchJokes(category);
  };

  const getRandomColor = (): string => {
    const colors = ["lightblue", "lightpink", "lightgray"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Container>
      <Heading>Categories</Heading>
      {data?.categories?.map((category: string, index: any) => (
        <StyledChip
          key={index}
          label={category}
          clickable
          style={{ borderColor: getRandomColor() }}
          variant="outlined"
          onClick={() => fetchJokes(category)}
        />
      ))}
    </Container>
  );
};

export default Categories;
