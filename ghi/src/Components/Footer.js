import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  Copyright,
} from "@material-ui/icons";
import React, { Fragment } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Swapshop2 from "../Swapshop2.png";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Logo>
        <a>
          <img
            className="logo"
            height="300"
            width="300"
            src={Swapshop2}
            alt=""
          />
        </a>
      </Logo>
      <Left>
        <Logo>SwapShop</Logo>
        <Desc>
          SwapShop is a site designed to browse items and list items to sell.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
        <Desc>
          <ContactItem>
            <Copyright style={{ marginRight: "10px" }} /> Copyright 2023 MCJAB
          </ContactItem>
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <NavLink style={{ color: "black" }} to="/">
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink style={{ color: "black" }} to="/mens/">
              Mens Items
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink style={{ color: "black" }} to="/womens/">
              Womens Items
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink style={{ color: "black" }} to="/jewelry/">
              Jewelry
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink style={{ color: "black" }} to="...">
              Terms and Conditions
            </NavLink>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 7 Seven Lane, Galvanize Way
          12345
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 567 8900
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> swapshop@example.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
