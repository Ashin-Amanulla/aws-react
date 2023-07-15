import React, { useEffect, useState } from "react";
import axios from "axios";


const API_URL = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_URL_PROD : process.env.REACT_APP_API_URL_DEV;


export default function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(`${API_URL}/getTodo`);
      console.log('url',API_URL)
       setTodo(response.data.data);
      setTodo(response.data.data);
    } catch (error) {
      console.log("err" + error);
    }
  }

  return (
    <div>
      {todos.map((i) => (
        <div key={i.id}>
          <p>{i.title}</p>
        </div>
      ))}
    </div>
  );
}
