import styled from "styled-components";
import { cardData } from "./CardData";
import CardItem from "./CardItems";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Cards = ({ item }) => {
  return (
    <Container>
      {cardData.map((item) => (
        <CardItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Cards;
