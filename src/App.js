import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Loader from "./Components/Loader";
import "antd/dist/antd.css";

function App() {
  const [data, setData] = useState([]);
  const[loading,isLoading] = useState(false)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        isLoading(true)
      });
  }, []);
  return (
    <div className="App">
    {loading ? (
      <Cards data={data} />
    ) : (<Loader/>) }
    </div>
  );
}

export default App;
