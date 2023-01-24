import styled from "styled-components";
import { cardData2 } from "./CardData2";
import CardItem2 from "./CardItems2";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Cards2 = ({ item }) => {
  return (
    <Container>
      {cardData2.map((item) => (
        <CardItem2 item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Cards2;
