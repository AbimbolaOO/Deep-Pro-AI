import React from "react";
import { HOne, Button, Paragraphs } from "./UiComponents";
import styled from "styled-components";
import { fontFamily, fontWeight, typeScale, lineHeight } from "../utils";

const ContactShell = styled.div`
  width: calc(100%-310);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 200px;
`;
const FormContainer = styled.form`
  display: grid;
  grid-template-areas:
    "name email"
    "company phone"
    "textarea textarea"
    "submit submit";

  padding-top: 40px;
  grid-gap: 20px;
  .namefield {
    grid-area: name;
  }
  .emailfield {
    grid-area: email;
  }
  .companyfield {
    grid-area: company;
  }
  .phonefield {
    grid-area: phone;
  }
  .textareafield {
    grid-area: textarea;
  }
  .submitBtn {
    grid-area: submit;
  }
`;

const FieldContainer = styled.div`
  display: flex;
  padding: 5px 20px 15px;
  flex-direction: column;
  border: 3px solid ${(props) => props.theme.secondaryDarkColor};
  border-radius: 17px;
  height: 100px;
  justify-content: space-between;
`;

const TextareaContainer = styled.div`
  width: 100%;
  height: 220px;
  border: 3px solid ${(props) => props.theme.secondaryDarkColor};
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
`;

const Input = styled.input`
  font-family: ${fontFamily.primary};
  font-style: normal;
  font-weight: ${fontWeight.primary};
  font-size: ${typeScale.paragraph};
  line-height: ${lineHeight.primary};

  letter-spacing: 0.15px;

  color: ${(props) => props.theme.primaryBlackSmallTextColor};
  border: none;
  outline: none;
  box-shadow: none;
  background: none;

  color: #000000;
`;

const TextArea = styled.textarea`
  padding-top: 15px;
  font-family: ${fontFamily.primary};
  font-style: normal;
  font-weight: ${fontWeight.primary};
  font-size: ${typeScale.paragraph};
  line-height: ${lineHeight.primary};

  letter-spacing: 0.15px;

  color: ${(props) => props.theme.primaryBlackSmallTextColor};
  border: none;
  outline: none;
  box-shadow: none;
  background: none;

  box-shadow: none;
  resize: none;
  overflow: auto;
`;

export function Contact() {
  return (
    <ContactShell>
      <HOne>Let's build great things together.</HOne>
      <FormContainer>
        {/* name field goes here */}
        <FieldContainer className="namefield">
          <Paragraphs modifiers="labelFont" as="label" htmlFor="name">
            Name
          </Paragraphs>
          <Input id="name" type="text" name="name" />
        </FieldContainer>
        {/* Email field goes here */}
        <FieldContainer className="emailfield">
          <Paragraphs modifiers="labelFont" as="label" htmlFor="email">
            Email
          </Paragraphs>
          <Input id="email" type="email" name="emasil" />
        </FieldContainer>
        {/*  Company field goes here*/}
        <FieldContainer className="companyfield">
          <Paragraphs modifiers="labelFont" as="label" htmlFor="company">
            Comapny (optional)
          </Paragraphs>
          <Input id="company" type="text" name="company" />
        </FieldContainer>
        {/* Phone credentials goes here */}
        <FieldContainer className="phonefield">
          <Paragraphs modifiers="labelFont" as="label" htmlFor="phone">
            Phone{" "}
          </Paragraphs>
          <Input id="phone" type="phone" name="name" />
        </FieldContainer>
        {/* textarea field goes here */}
        <TextareaContainer className="textareafield">
          <Paragraphs modifiers="labelFont" as="label" htmlFor="textarea">
            How can we help
          </Paragraphs>
          <TextArea id="textarea" rows="11"></TextArea>
        </TextareaContainer>
        {/* Submit button goes here */}
        <div className="submitBtn">
          <Button as="input" type="submit" value="Connext with us" />
        </div>
      </FormContainer>
    </ContactShell>
  );
}
