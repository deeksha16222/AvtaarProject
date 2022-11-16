import React, { useEffect, useState } from "react";

export default function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {setData(result)});
  }, []);
  return (
    <div>
      
        {data.map((item) => (
          <li key={item.id}>
            {item.name} {item.username} {item.email}
          </li>
        ))}
  
    </div>
  );
}
