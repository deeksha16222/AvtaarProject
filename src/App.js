import React,{useState,useEffect} from 'react'
import './App.css'
import Cards from './Components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvtarImage from './Components/AvtarImage';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {setData(result)});
  }, []);
  return (
    <div className="App">
    <Cards data={data}/>
    </div>
  );
}

export default App;
