import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import "antd/dist/antd.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <Cards data={data} />
    </div>
  );
}

export default App;
