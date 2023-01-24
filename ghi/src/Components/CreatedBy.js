import { Send } from "@material-ui/icons";
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

// const InputContainer = styled.div`
//   width: 50%;
//   height: 40px;
//   background-color: white;
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid lightgray;
// `;

// const Input = styled.input`
//   border: none;
//   flex: 8;
//   padding-left: 20px;
// `;

const Button = styled.button`
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
      {/* <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer> */}
    </Container>
  );
};

export default CreatedBy;
