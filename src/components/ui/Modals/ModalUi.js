import React from "react";
import { Modal, ModalBody } from "reactstrap";
import "./Styles.css";

function ModalUi(props) {
  return (
    <Modal {...props} fade={true} centered={true}>
      <ModalBody>{props.children}</ModalBody>
    </Modal>
  );
}

export default ModalUi;
