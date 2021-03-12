import styled from "styled-components";

export const JokesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 15px 135px;
  padding: 10px;
  position: relative;
  height: 650px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Contiainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 10rem;
`;

export const Heading = styled.h2`
  margin: -2px 20px 0 0;
  animation: blinker 1s linear infinite;

  @keyframes blinker {
    60% {
      opacity: 0;
    }
  }
`;

export const ErrorText = styled.h2`
  margin-top: 20px;
`;
