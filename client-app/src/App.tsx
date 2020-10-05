import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import {cars, ICar} from './Demo';
import './App.css';
import CarItem from './CarItem';
import axios from 'axios';

interface IProps {
  id: number;
  name: string;
}

function App() {
  const [values, setValues] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/values").then(response => {
      setValues(response.data)
    })
  },[])
  return (
    <div className="App"> 
      <ul>
        {values.map((value:IProps) =>  
          <div key={value.id}>
            <h1>{value.id}</h1>
            <h2>{value.name}</h2>
          </div>
        )
      }
      </ul>
    </div>
  );
}

export default App;
