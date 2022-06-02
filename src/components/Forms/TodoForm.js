import { useState } from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card";
import classes from "./Modal.module.css";

const TodoForm = ({ onSubmit, addHandler }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const changeTextHandler = (event) => {
    setTitle(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (title === "") {
      setError(true);
      return;
    }
    const newTodo = {
      userId: 1,
      id: Math.floor(Math.random() * 100) + 11,
      title: title,
      completed: false,
    };
    console.log("New Data", newTodo);
    addHandler(newTodo);
    onSubmit();
    setTitle("");
  };
  return (
    <Card className={classes.modal}>
      <form className="form-control" onSubmit={formSubmitHandler}>
        <label htmlFor="title">Title</label>
        <input type="text" onChange={changeTextHandler} value={title} />
        {error && <p>The title field cannot be empty.</p>}
        <button>Submit</button>
      </form>
    </Card>
  );
};
TodoForm.propTypes = {
  handleModal: PropTypes.func,
  addHandler: PropTypes.func,
};

export default TodoForm;
