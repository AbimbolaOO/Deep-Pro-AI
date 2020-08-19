import React from "react";
import styled from "styled-components";
import { HTwo, Button } from "./UiComponents";
import { Link } from "react-router-dom";
import media from "../media";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const modalVariant = {
  hidden: {
    y: "-200vh",
  },
  visible: {
    y: "0vh",
    transition: { duration: 1 },
  },
  hover: {
    scale: 1.5,
  },
};

const ModalContainer = styled.div.attrs((props) => ({
  display: props.display ? "flex" : "none",
}))`
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  align-self: center;
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: -10px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalItems = styled(motion.div)`
  display: flex;
  margin: 0;
  padding: 50px;
  border: 3px solid ${(props) => props.theme.secondaryDarkColor};
  border-radius: 20px;
  background-color: ${(props) => props.theme.primaryColor};

  ${media.phones`
    max-width: 80%;
  `}
  ${media.iPadMinis`
    max-width: 80%;
  `}
`;

export default function Modal({ showModal, setShowModal, status }) {
  const handleClick = () => {
    setShowModal(!showModal);
    console.log("modal showModal", showModal);
    console.log("modal is here", status);
  };

  return (
    <ModalContainer display={showModal}>
      {status ? (
        <ModalItems variants={modalVariant} initial="hidden" animate="visible">
          <HTwo>Thanks for contacting us</HTwo>

          <Link to="/">
            <Button onClick={handleClick}>
              <FontAwesomeIcon icon={faTimes} color="white" />
            </Button>
          </Link>
        </ModalItems>
      ) : (
        <ModalItems variants={modalVariant} initial="hidden" animate="visible">
          <HTwo>Oops check your connection :)</HTwo>

          <Link to="/contact">
            <Button onClick={handleClick}>
              <FontAwesomeIcon icon={faTimes} color="white" />
            </Button>
          </Link>
        </ModalItems>
      )}
    </ModalContainer>
  );
}
