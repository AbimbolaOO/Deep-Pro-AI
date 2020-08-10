import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { typeScale, fontFamily } from "../utils";

const MyHead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin-bottom: 40px;
`;

const UnOrderedList = styled.ul`
  flex-basis: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ListItem = styled.li`
  display: flex;
`;

const Styledlink = styled(Link)`
  font-size: ${typeScale.links};
  font-family: ${fontFamily.primary};
`;

const LogoArea = styled.div``;

export function Header() {
  return (
    <MyHead>
      <LogoArea>
        <Styledlink to="/">DeepProAI</Styledlink>
      </LogoArea>
      <UnOrderedList>
        <ListItem>
          <Styledlink to="/">Services</Styledlink>
        </ListItem>
        <li>
          <Styledlink to="/culture">Culture</Styledlink>
        </li>
        <li>
          <Styledlink to="/contact">Contact</Styledlink>
        </li>
      </UnOrderedList>
    </MyHead>
  );
}
