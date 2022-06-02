import { useState } from "react";
import Users from "./Users";
import UserModal from "../UI/Modal/UserModal";
import useFetch from "../../hooks/use-fetch";
import useToggle from "../../hooks/use-toggle";
import styles from "./UserFinder.module.css";
import Spinner from "../UI/Spinner";
import classes from "./Users.module.css";
import ToggleWrapper from "../UI/Toggle";
import useDelete from "../../hooks/use-delete";
import useSearch from "../../hooks/use-search";
import useAdd from "../../hooks/use-add";

const entity = "users";

const UserFinder = () => {
  const {
    fetchedData,
    filteredData,
    isLoading,
    error,
    setFilteredData,
    setFetchedData,
  } = useFetch(entity);
  const { showData, toggleHandler } = useToggle();
  const { deleteHandler } = useDelete(filteredData, setFilteredData);
  const searchChangeHandler = useSearch(fetchedData, setFilteredData, entity);
  const [userModal, setUserModal] = useState(false);
  const addHandler = useAdd(filteredData, setFetchedData, setFilteredData);

  const handleUserModal = () => {
    setUserModal((curState) => !curState);
  };
  if (error) {
    throw new Error("Could not fetch Users");
  }

  return (
    <div className={styles.finder}>
      <input type="search" onChange={searchChangeHandler} />
      {isLoading && <Spinner />}
      <div className={classes.users}>
        <ToggleWrapper
          entity={entity}
          show={showData}
          handleToggle={toggleHandler}
        />
        <Users
          users={filteredData}
          showData={showData}
          onDelete={deleteHandler}
          handleModal={handleUserModal}
        />
      </div>
      {userModal && (
        <UserModal handleModal={handleUserModal} addHandler={addHandler} />
      )}
    </div>
  );
};

export default UserFinder;
