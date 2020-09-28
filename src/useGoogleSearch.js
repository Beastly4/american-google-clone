import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "8b7331d73d0f326ae";

const useGoogleSearch = (payload) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${payload}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [payload]);
  return { data };
};

export default useGoogleSearch;
