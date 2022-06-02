import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Add from "../UI/Add";

import Todo from "./Todo";

const Todos = ({ todos, showData, onDelete, handleModal }) => {
  let todosList;
  if (todos.length === 0) {
    todosList = <p>No such todos.</p>;
  } else {
    todosList = (
      <ul>
        {todos.map((item) => {
          return (
            <Todo
              key={item.id}
              name={item.title}
              id={item.id}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    );
  }
  return (
    <Fragment>
      {showData && todosList} <Add type="Todos" handleModal={handleModal} />
    </Fragment>
  );
};
Todos.propTypes = {
  todos: PropTypes.array,
  showData: PropTypes.bool,
  onDelete: PropTypes.func,
  handleModal: PropTypes.func,
};

export default Todos;
