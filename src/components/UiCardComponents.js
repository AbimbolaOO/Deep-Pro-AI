import React from "react";
import { HOne, Paragraphs } from "./UiComponents";
import styled from "styled-components";

const CardSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 200px;
`;
const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  flex-grow: 1;
  padding-right: 130px;
`;

const ImageSection = styled.img`
  flex-basis: 45%;
  flex-grow: 1;
  display: flex;
`;

export default function UiCardComponent({ header1, reverse, image, children }) {
  return (
    <CardSection
      className={reverse ? "txt-img-container-reversed" : "txt-img-container"}
    >
      <TextSection
        className={reverse ? "txt-img-text-reversed" : "txt-img-text"}
      >
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
