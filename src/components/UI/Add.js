import React from "react";
import PropTypes from "prop-types";

const Add = ({ type, handleModal }) => {
  const addHandler = (event) => {
    handleModal();
  };

  return <button onClick={addHandler}>Add {type}</button>;
};

Add.propTypes = {
  type: PropTypes.string,
  handleModal: PropTypes.func,
};

export default Add;
