import React, { useState } from "react";

const useFetch = async (url, header, setIsLoading) => {
  const [error, setError] = useState(null);

  setIsLoading(true);

  try {
    const response = await fetch(url, header);

    if (!response.ok) {
      throw new Error("Request failed!");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    setError(err.message || "Something went wrong!");
  }
  setIsLoading(false);
};

export default useFetch;
