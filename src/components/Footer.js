import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../assets";
import { fontFamily } from "../utils";
import { HTwo, Button } from "./UiComponents";
import styled from "styled-components";

// background-color: ${(props) => props.theme.primaryDarkColor};
const FooterSection = styled.footer`
  display: flex;
  flex-wrap: wrap;
  border-top: 30px solid ${(props) => props.theme.primaryDarkColor};
  height: 290px;
  justify-content: space-between;
  padding: 50px 10px 0 10px;
`;

const SocialSections = styled.ul`
  flex-basis: 50%;
  order: 3;
  display: flex;
  padding: 0;
`;

export const ButtonLink = styled(Link)`
  flex-basis: 50%;
  order: 2;
  display: flex;
  height: 50px;
  flex-direction: row-reverse;
`;
const ListElement = styled.ul``;

const CopyWrite = styled.p`
  font-family: ${fontFamily.primary};
  padding: 10px 0;
  font-size: 14px;
  flex-basis: 50%;
  order: 4;
  display: flex;
  flex-direction: row-reverse;
  align-self: flex-end;
`;

export function Footer() {
  return (
    <FooterSection>
      <HTwo modifiers={["flexBasis", "margin"]}>Let's build together</HTwo>
      <SocialSections>
        <ListElement>
          <a href="https://www.instagram.com/">
            <img src={icons.instagramIcon} alt="instagram" />
          </a>
        </ListElement>
        <ListElement>
          <a href="https://www.facebook.com/">
            <img src={icons.facebookIcon} alt="facebook" />
          </a>
        </ListElement>
        <ListElement>
          <a href="https://twitter.com/">
            <img src={icons.twitterIcon} alt="twitter" />
          </a>
        </ListElement>
      </SocialSections>
      <ButtonLink to="/contact">
        <Button>Connect with us</Button>
      </ButtonLink>
      <CopyWrite>DeepProAI &#169; 2020</CopyWrite>
    </FooterSection>
  );
}
