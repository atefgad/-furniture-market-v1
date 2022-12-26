import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/slices/modalSlice";
import { ModalUi, AddAddress } from "../index";

function Modal() {
  const dispatch = useDispatch();
  const { isOpen, componentName } = useSelector((state) => state.modal);

  const closeModalHandler = () => {
    dispatch(closeModal());
  };
  //const [modal, setModal] = useState(false);
  //const toggle = () => setModal(!modal);

  const componentsNames = { AddAddress };
  let renderComponent;

  if (componentName) {
    const SelectedComponent =
      componentsNames[componentName] || componentsNames[0];
    if (SelectedComponent) {
      renderComponent = <SelectedComponent />;
    }
  }
  return (
    <ModalUi isOpen={isOpen} toggle={closeModalHandler}>
      {renderComponent}
    </ModalUi>
  );
}

export default Modal;
