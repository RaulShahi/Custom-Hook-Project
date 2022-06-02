import React from "react";
import PropTypes from "prop-types";

const Delete = ({ id, deleteHandler }) => {
  const handleDelete = () => {
    deleteHandler(id);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

Delete.propTypes = {
  id: PropTypes.number,
  deleteHandler: PropTypes.func,
};

export default Delete;
