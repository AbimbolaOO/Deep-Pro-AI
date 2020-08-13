import React from "react";
import { HOne, Paragraphs } from "./UiComponents";
import styled from "styled-components";
import media from "../media";

const CardSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 200px;

  ${media.iPadMinis`
  width:100%;
  `}

  ${media.phones`
  flex-direction: column;
  margin-bottom: 200px;
  `}
`;
const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  flex-grow: 1;
  padding-right: 130px;

  ${media.iPadMinis`
  padding-right: 100px;
  `}

  ${media.phones`
  flex-basis: 100%;
  padding-left:0;
  padding-right:0;
  padding-bottom: 100px;
  `}
`;

const ImageSection = styled.img`
  flex-basis: 45%;
  flex-grow: 1;
  display: flex;
`;

export default function UiCardComponent({ header1, image, children }) {
  return (
    <CardSection>
      <TextSection>
        <HOne>{header1}</HOne>
        <Paragraphs>{children}</Paragraphs>
      </TextSection>
      <ImageSection
        className="txt-img-image"
        src={image}
        alt="placeholder content"
      />
    </CardSection>
  );
}
