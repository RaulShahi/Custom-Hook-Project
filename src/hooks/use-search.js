import { useState, useEffect } from "react";

const useSearch = (allData, setAllData, entity) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (entity === "users") {
      setAllData(
        allData.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    if (entity === "todos") {
      setAllData(
        allData.filter((todo) =>
          todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return searchChangeHandler;
};

export default useSearch;
