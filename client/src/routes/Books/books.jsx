import React, { useState, useEffect } from "react";

function books() {
  const baseURL = "https://server.raddy.co.uk/api/books";

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(baseURL);
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Books</h1>
      <p>
        This is where we use NodeJs, Express & MongoDB to grab some data. The
        data below is pulled from a MongoDB database.
      </p>

      <h1>Fetch Example</h1>
     
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item._id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default books;
