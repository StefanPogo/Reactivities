import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { cars, ICar } from "./Demo";
import "./App.css";
import CarItem from "./CarItem";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Header, Icon, List } from "semantic-ui-react";

function App() {
  const [values, setValues] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/values").then((response) => {
      setValues(response.data);
    });
  }, []);
  return (
    <div className="App">
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>Reactivities</Header.Content>
      </Header>
      <List>
        {values.map((value: any) => (
          <List.Item key={value.id}>{value.name}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
