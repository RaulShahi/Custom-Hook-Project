import React from "react";
import PropTypes from "prop-types";
import classes from "./User.module.css";
import Delete from "../UI/Delete";

const User = ({ name, onDelete, id }) => {
  return (
    <li className={classes.user}>
      {name} <Delete deleteHandler={onDelete} id={id} />
    </li>
  );
};

User.propTypes = {
  name: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.number,
};

export default User;
