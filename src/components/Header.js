import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { typeScale, fontFamily } from "../utils";
import { defaultTheme } from "../utils";
import media from "../media";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const MyHead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin-bottom: 40px;
`;

const UnOrderedList = styled.ul.attrs((props) => ({
  display: props.display ? "flex" : "none",
}))`
  flex-basis: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  ${media.iPadMinis`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 3em;
  position: fixed;
  right: -10px;
  top: -20px;
  height: 100%;
  width: 300px;
  background-color: ${(props) => props.theme.secondaryDarkColor};
  `}
`;

const ListItem = styled.li`
  display: flex;
`;

const Styledlink = styled(Link)`
  font-size: ${typeScale.links};
  font-family: ${fontFamily.primary};

  ${media.iPadMinis`
  color: ${(props) => props.theme.secondaryDarkWhitelargeTextColor};
  `}

  &.logoColor {
    color: ${(props) => props.theme.secondaryDarkColor};
  }
`;

const LogoArea = styled.div``;

const StyledMenuBars = styled(FontAwesomeIcon)`
  display: none;
  ${media.iPadMinis`
    display: block;
    position: absolute;
    right: 10px;
  `}
`;

export function Header() {
  const [menuState, setMenuState] = useState(false);
  const handleClick = () => {
    setMenuState(!menuState);
    console.log(!menuState);
  };

  return (
    <MyHead>
      {/* Company logo and name */}
      <LogoArea>
        <Styledlink className="logoColor" to="/">
          DeepProAI
        </Styledlink>
      </LogoArea>
      {/* Links to pages */}
      <UnOrderedList display={menuState}>
        <ListItem onClick={handleClick}>
          <Styledlink to="/">Services</Styledlink>
        </ListItem>
        <ListItem onClick={handleClick}>
          <Styledlink to="/culture">Culture</Styledlink>
        </ListItem>
        <ListItem onClick={handleClick}>
          <Styledlink to="/contact">Contact</Styledlink>
        </ListItem>
      </UnOrderedList>
      {/* MenuIcons */}
      <StyledMenuBars
        onClick={handleClick}
        icon={menuState ? faTimes : faBars}
        size="3x"
        color={
          menuState
            ? defaultTheme.secondaryDarkWhitelargeTextColor
            : defaultTheme.secondaryDarkColor
        }
      />
    </MyHead>
  );
}
