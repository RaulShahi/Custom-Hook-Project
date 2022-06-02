import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import TodoForm from "../../Forms/TodoForm";

const TodoModal = ({ handleModal, addHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={handleModal} />,
        document.getElementById("backdrop-root")
      )}
      {/* <TodoForm onSubmit={handleModal} addHandler={addHandler} /> */}
      {ReactDOM.createPortal(
        <TodoForm onSubmit={handleModal} addHandler={addHandler} />,
        document.getElementById("todoForm-root")
      )}
    </>
  );
};
TodoModal.propTypes = {
  handleModal: PropTypes.func,
  addHandler: PropTypes.func,
};

export default TodoModal;
