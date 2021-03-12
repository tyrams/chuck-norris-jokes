import { Chip, withStyles } from "@material-ui/core";
import styled from "styled-components";

export const StyledChip = withStyles({
  root: {
    margin: "5px",
  },
})(Chip);

export const Container = styled.div`
  margin: 15px;
  padding: 10px;
`;

export const Heading = styled.h2`
  margin: 20px 0;
`;
