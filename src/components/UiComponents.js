import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { fontFamily, fontWeight, lineHeight, typeScale } from "../utils";

const HTAG_MODIFIER_CONFIG = {
  flexBasis: () => `
    flex-basis: 50%;
  `,
  margin: () => `
    margin-top: 0;
  `,
};

const PARAGRAPHS_MODIFIER_CONFIG = {
  font: ({ theme }) => `
    font-size: 1.5rem;
    color: ${theme.primarySmallTextColor};
  `,
  labelFont: ({ theme }) => `
  color: ${theme.primaryLargeTextColor};
  `,
};

export const HOne = styled.h1`
  font-family: ${fontFamily.secondary};
  font-style: normal;
  font-weight: ${fontWeight.secondary};
  font-size: ${typeScale.header1};
  line-height: ${lineHeight.secondary};

  letter-spacing: 0.15px;

  color: ${(props) => props.theme.primaryLargeTextColor};
`;

export const HTwo = styled.h2`
  font-family: ${fontFamily.secondary};
  font-style: normal;
  font-weight: ${fontWeight.secondary};
  font-size: ${typeScale.header2};
  line-height: ${lineHeight.secondary};

  letter-spacing: 0.15px;

  color: ${(props) => props.theme.primarySmallTextColor};
  ${applyStyleModifiers(HTAG_MODIFIER_CONFIG)};
`;

export const Paragraphs = styled.p`
  font-family: ${fontFamily.primary};
  font-style: normal;
  font-weight: ${fontWeight.primary};
  font-size: ${typeScale.paragraph};
  line-height: ${lineHeight.primary};

  letter-spacing: 0.15px;

  color: ${(props) => props.theme.primaryBlackSmallTextColor};
  ${applyStyleModifiers(PARAGRAPHS_MODIFIER_CONFIG)};
`;

export const Button = styled.button`
  font-family: ${fontFamily.primary};
  font-style: normal;
  font-weight: ${fontWeight.secondary};
  font-size: ${typeScale.button};
  line-height: ${lineHeight.secondary};
  background-color: ${(props) => props.theme.secondaryDarkColor};
  border-radius: 33px;
  letter-spacing: 0.15px;
  outline: none;
  cursor: pointer;
  border: none;
  display: inline-block;
  padding: 0 20px;
  color: ${(props) => props.theme.secondaryDarkWhitelargeTextColor};
`;
