import React from "react";
import { icons } from "../assets";
import { HOne, Paragraphs } from "./UiComponents";
import styled from "styled-components";
import media from "../media";

const Team = styled.div`
  margin-bottom: 200px;
`;

const TeamSection = styled.section`
  padding-top: 40px;
  display: flex;
  width: 800px;
  justify-content: space-between;
  ${media.iPadMinis`
    width: 100%;
  `}
  ${media.phones`
    width: 100%;
    flex-direction: column;
  `}
`;
const ImageWithCaps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${media.phones`
    margin-bottom: 50px;
  `}
`;

const Img = styled.img`
  ${media.phones`
        width: 100%;
  `}
`;
export default function Ourteam() {
  return (
    <Team>
      <HOne>Meet our team </HOne>
      <TeamSection>
        <ImageWithCaps>
          <Img src={icons.circularIcons} alt="Temitope Adebiyi" />
          <Paragraphs modifiers={["font"]}>
            Founder: Adebiyi Temitope
          </Paragraphs>
        </ImageWithCaps>
        <ImageWithCaps>
          <Img src={icons.circularIcons} alt="Olayemi Abimbola" />
          <Paragraphs modifiers={["font"]}>
            Co-Founder: Abimbola Olayemi
          </Paragraphs>
        </ImageWithCaps>
      </TeamSection>
    </Team>
  );
}
