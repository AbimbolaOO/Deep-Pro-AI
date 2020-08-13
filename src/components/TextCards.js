import React from "react";
import { HTwo, Paragraphs } from "./UiComponents";
import styled from "styled-components";
import media from "../media";

// export const
const TextSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 200px;

  ${media.phones`
  flex-direction: column;
  margin-bottom: 100px;
  `}
`;

const Element = styled.section`
  flex-basis: 30%;
  ${media.phones`
  flex-basis: 100%;
  flex-direction: column;
  margin-bottom: 50px;
  `}
`;

export default function TextCards() {
  return (
    <TextSection>
      <Element>
        <HTwo>Ourselves</HTwo>
        <Paragraphs>
          We aim to improve human capabilities through our own projects, our
          internal tools, and the many user experience challenges we take on.
        </Paragraphs>
      </Element>
      <Element>
        <HTwo>Our clients</HTwo>
        <Paragraphs>
          A diverse set of challenges for every project keeps us on our toes.
          This encourages adaptability, but also creates a deep respect for core
          processes.
        </Paragraphs>
      </Element>
      <Element>
        <HTwo>Our community</HTwo>
        <Paragraphs>
          Everything we do for DockYard and our clients provides an opportunity
          to help the community of engineers and designers that we are proud to
          belong to.
        </Paragraphs>
      </Element>
    </TextSection>
  );
}
