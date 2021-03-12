import React from "react";
import { IJoke } from "../../../commons/interfaces/joke-interface";
import { JokeCardContainer, Card, Achor, Description } from "./styles";

const JokeCard = ({ icon_url, url, value }: IJoke) => {
  return (
    <JokeCardContainer>
      <Card>
        <img
          src={icon_url}
          alt="img"
          width="50"
          height="50"
          style={{ alignSelf: "center" }}
        />
        <Description>{value}</Description>
        <Achor href="#" onClick={() => window.open(url, "_blank")}>
          Read more
        </Achor>
      </Card>
    </JokeCardContainer>
  );
};

export default JokeCard;
