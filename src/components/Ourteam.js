import React from "react";
import { icons } from "../assets";
import { HOne, Paragraphs } from "./UiComponents";
import styled from "styled-components";

const Team = styled.div`
  margin-bottom: 200px;
`;

const TeamSection = styled.section`
  padding-top: 40px;
  display: flex;
  width: 800px;
  justify-content: space-between;
`;
const ImageWithCaps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
export default function Ourteam() {
  return (
    <Team>
      <HOne>Meet our team </HOne>
      <TeamSection>
        <ImageWithCaps>
          <img
            className="team-member"
            src={icons.circularIcons}
            alt="Temitope Adebiyi"
          />
          <Paragraphs modifiers={["font"]}>
            Founder: Adebiyi Temitope
          </Paragraphs>
        </ImageWithCaps>
        <ImageWithCaps>
          <img
            className="team-member"
            src={icons.circularIcons}
            alt="Olayemi Abimbola"
          />
          <Paragraphs modifiers={["font"]}>
            Co-Founder: Abimbola Olayemi
          </Paragraphs>
        </ImageWithCaps>
      </TeamSection>
    </Team>
  );
}
