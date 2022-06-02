import { useState } from "react";

const useAdd = (allData, setAllData, setFilteredData) => {
  const addHandler = (newData) => {
    setAllData(allData.concat(newData));
    setFilteredData(allData.concat(newData));
  };

  return addHandler;
};

export default useAdd;
