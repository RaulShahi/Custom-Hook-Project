import React from "react";
import PropTypes from "prop-types";
import classes from "./Todo.module.css";
import Delete from "../UI/Delete";

const Todo = ({ name, onDelete, id }) => {
  return (
    <li className={classes.todo}>
      {name} <Delete deleteHandler={onDelete} id={id} />
    </li>
  );
};

Todo.propTypes = {
  name: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.number,
};
export default Todo;
