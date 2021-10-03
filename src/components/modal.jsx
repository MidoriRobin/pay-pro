import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Card from "./card";

const ModalWrap = styled.div`
  /* Layout */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ show }) => (show ? "block" : "none")};
  z-index: 1;

  /* Presentation */
  background: rgba(0, 0, 0, 0.6);
`;

const ModalCont = styled.section`
  /* Layout */
  position: fixed;
  /* background: white; */
  /* width: 80%; */
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Presentation */
`;

const Modal = (props) => {
  // const [show, setShow] = useState(false);

  // function flipState() {
  //   setShow((prevShow) => !prevShow);
  // }

  return (
    <ModalWrap className="modal-wrapper" show={props.show}>
      <ModalCont className="modal-container">
        <Card width="30rem">
          {props.children}
          <button type="button" onClick={props.flipModal}>
            Close
          </button>
        </Card>
      </ModalCont>
    </ModalWrap>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  flipModal: PropTypes.func,
};

export default Modal;
