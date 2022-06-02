import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card";
import classes from "./Modal.module.css";

const UserForm = ({ onSubmit, addHandler }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (firstName === "" || lastName === "") {
      setError(true);
      return;
    }
    const newData = {
      id: Math.floor(Math.random() * 100) + 11,
      name: firstName + " " + lastName,
    };
    addHandler(newData);
    onSubmit();
    setFirstName("");
    setLastName("");
  };

  return (
    <Card className={classes.modal}>
      <form className="form-control" onSubmit={formSubmitHandler}>
        <label htmlFor="firstname">First Name</label>
        <input type="text" onChange={firstNameChangeHandler} />
        <label htmlFor="firstname">Last Name</label>
        <input type="text" onChange={lastNameChangeHandler} />
        {error && <p>Fields cannot be empty</p>}
        <button>Submit</button>
      </form>
    </Card>
  );
};

UserForm.propTypes = {
  handleModal: PropTypes.func,
  addHandler: PropTypes.func,
};

export default UserForm;
