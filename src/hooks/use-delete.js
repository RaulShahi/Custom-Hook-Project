import { useState } from "react";

const useDelete = (allData, setAllData) => {
  const deleteHandler = (id) => {
    setAllData(allData.filter((item) => item.id !== id));
  };

  return { deleteHandler };
};

export default useDelete;
