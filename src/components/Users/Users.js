import React, { Fragment } from "react";
import PropTypes from "prop-types";
import User from "./User";
import Add from "../UI/Add";

const Users = ({ users, showData, onDelete, handleModal }) => {
  let usersList;
  if (users.length === 0) {
    usersList = <p>No such users.</p>;
  } else {
    usersList = (
      <ul>
        {users.map((item) => {
          return (
            <User
              key={item.id}
              name={item.name}
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
      {showData && usersList} <Add type="Users" handleModal={handleModal} />
    </Fragment>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  showData: PropTypes.bool,
  onDelete: PropTypes.func,
  handleModal: PropTypes.func,
};

export default Users;
