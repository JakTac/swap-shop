import styled from "styled-components";

import { Copyright } from "@material-ui/icons";

const Container = styled.div`
  height: 60vh;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

styled.button`
  flex: 1;
  border: none;
  background-color: gray;
  color: white;
`;

const CreatedBy = () => {
  return (
    <Container>
      <Title>7EVEN</Title>
      <Desc>Melissa - Cody - Jake - Alonso - Ben</Desc>
      <Desc>
        <Copyright style={{ marginRight: "10px" }} />
        MCJAB
      </Desc>
    </Container>
  );
};

export default CreatedBy;
