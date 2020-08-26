import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HOne, Button, Paragraphs, RequiredStyle } from "./UiComponents";
import Modal from "./Modal";
import styled from "styled-components";
import { fontFamily, fontWeight, typeScale, lineHeight } from "../utils";
import media from "../media";

/* First import the API category from Amplify */
import { API } from "aws-amplify";

/* Next, import the createContact mutation */
import { createContact } from "../graphql/mutations";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const ContactShell = styled.div`
  width: calc(100%-310);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 200px;
  ${media.phones`
    display 100%;
  `}
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

  ${media.phones`
    display 100%;

    display: grid;
  grid-template-areas:
    "name"
    "email"
    "phone"
    "company"
    "textarea"
    "submit";

  `}
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
  /* Code below help to remove chome autofill background color */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
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

// The required component ==> used in form validation
const Required = () => {
  return (
    <RequiredStyle>
      <FontAwesomeIcon icon={faExclamationTriangle} />
      This is required
    </RequiredStyle>
  );
};

// Contact components
export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  // Create a function that will create a new contact
  async function submitNewContact(data) {
    try {
      await API.graphql({
        query: createContact,
        variables: {
          input: {
            ...data,
          },
        },
      });
      setStatus(true);
      console.log("New contact created!");
    } catch (err) {
      console.log({ err });
    }
    setShowModal(!showModal);
  }

  return (
    <React.Fragment>
      {/* Displays the modal below when form is submitted */}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        status={status}
      />
      {/* Contact page contents are implemented below */}
      <ContactShell>
        <HOne>Let's build great things together.</HOne>
        {/* Form implementation starts from here */}
        <FormContainer onSubmit={handleSubmit(submitNewContact)}>
          {/* name field goes here */}
          <FieldContainer className="namefield">
            <Paragraphs modifiers="labelFont" as="label" htmlFor="name">
              Name
            </Paragraphs>
            <Input
              id="name"
              type="text"
              name="name"
              ref={register({ required: true })}
            />
            {errors.name && <Required />}
          </FieldContainer>
          {/* Email field goes here */}
          <FieldContainer className="emailfield">
            <Paragraphs modifiers="labelFont" as="label" htmlFor="email">
              Email
            </Paragraphs>
            <Input
              id="email"
              type="email"
              name="email"
              ref={register({ required: true })}
            />
            {errors.email && <Required />}
          </FieldContainer>
          {/*  Company field goes here*/}
          <FieldContainer className="companyfield">
            <Paragraphs modifiers="labelFont" as="label" htmlFor="company">
              Comapny (optional)
            </Paragraphs>
            <Input id="company" type="text" name="company" ref={register()} />
            {errors.company && <Required />}
          </FieldContainer>
          {/* Phone credentials goes here */}
          <FieldContainer className="phonefield">
            <Paragraphs modifiers="labelFont" as="label" htmlFor="phone">
              Phone
            </Paragraphs>
            <Input
              id="phone"
              type="phone"
              name="phone"
              ref={register({ required: true })}
            />
            {errors.phone && <Required />}
          </FieldContainer>
          {/* textarea field goes here */}
          <TextareaContainer className="textareafield">
            <Paragraphs modifiers="labelFont" as="label" htmlFor="textarea">
              How can we help
            </Paragraphs>
            <TextArea
              id="textarea"
              rows="11"
              name="help"
              ref={register}
            ></TextArea>
          </TextareaContainer>
          {/* Submit button goes here */}
          <div className="submitBtn">
            <Button as="input" type="submit" value="Connect with us" />
          </div>
        </FormContainer>
      </ContactShell>
    </React.Fragment>
  );
}
