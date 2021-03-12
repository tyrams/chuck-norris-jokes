import styled from "styled-components";

export const JokeCardContainer = styled.div`
  margin: 10px;
  max-width: 300px;
  min-width: 50px;
  min-height: 50px;
  max-height: 500px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;

export const Description = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

export const Achor = styled.a`
  margin: 5px 0;
`;
