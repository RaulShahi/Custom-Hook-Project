import { useState } from "react";
import Todos from "./Todos";
import useFetch from "../../hooks/use-fetch";
import useDelete from "../../hooks/use-delete";
import useToggle from "../../hooks/use-toggle";
import useSearch from "../../hooks/use-search";
import TodoModal from "../UI/Modal/TodoModal";
import useAdd from "../../hooks/use-add";
import styles from "./TodoFinder.module.css";
import Spinner from "../UI/Spinner";
import classes from "./Todos.module.css";
import ToggleWrapper from "../UI/Toggle";

const entity = "todos";

const TodoFinder = () => {
  const {
    fetchedData,
    filteredData,
    isLoading,
    setFilteredData,
    setFetchedData,
  } = useFetch(entity);
  const { showData, toggleHandler } = useToggle();
  const { deleteHandler } = useDelete(filteredData, setFilteredData);
  const searchChangeHandler = useSearch(fetchedData, setFilteredData, entity);
  const addHandler = useAdd(filteredData, setFetchedData, setFilteredData);

  const [todoModal, setTodoModal] = useState(false);

  const handleTodoModal = () => {
    setTodoModal((curState) => !curState);
  };

  return (
    <div className={styles.finder}>
      <input type="search" onChange={searchChangeHandler} />
      {isLoading && <Spinner />}
      <div className={classes.todos}>
        <ToggleWrapper
          entity={entity}
          show={showData}
          handleToggle={toggleHandler}
        />
        <Todos
          todos={filteredData}
          showData={showData}
          onDelete={deleteHandler}
          handleModal={handleTodoModal}
        />
      </div>
      {todoModal && (
        <TodoModal handleModal={handleTodoModal} addHandler={addHandler} />
      )}
    </div>
  );
};

export default TodoFinder;
