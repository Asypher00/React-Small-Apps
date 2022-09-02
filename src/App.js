import "./styles.css";
import { React, useState } from "react";
import { todoData } from "./data";
import Todos from "./todos";
export default function App() {
  const [list, setList] = useState(todoData);
  return (
    <div className="App">
      <Todos list={list} setList={setList} />
    </div>
  );
}
