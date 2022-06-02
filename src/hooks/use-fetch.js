import { useState, useEffect } from "react";

const useFetch = (entity) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        if (!response.ok) {
          setError(true);
        }
        const responseData = await response.json();
        setFetchedData(responseData.slice(0, 10));
        setFilteredData(responseData.slice(0, 10));

        setIsLoading(false);
      } catch (error) {
        setError(true);

        console.log(error, error.message);
        throw new Error(`Could not fetch ${entity}`);
      }
    };

    fetchData();
  }, []);

  return {
    fetchedData,
    filteredData,
    isLoading,
    error,
    setFetchedData,
    setFilteredData,
  };
};

export default useFetch;
