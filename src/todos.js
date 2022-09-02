import { React, useState } from "react";
export default function Todos({ list, setList }) {
  const [item, setItem] = useState({
    id: Math.random(),
    title: "",
    completed: false
  });
  const markDone = (e) => {
    setList((list) =>
      list.map((f) =>
        e.id === f.id ? { ...f, completed: !f.completed } : { ...f }
      )
    );
  };
  return (
    <div>
      <input
        onChange={(e) =>
          setItem((Item) => ({ ...Item, title: e.target.value }))
        }
        type="text"
        placeholder="Enter Todo"
        value={item.title}
      ></input>{" "}
      <button
        onClick={() => {
          setList((List) => [...List, item]);
          setItem((Item) => ({ ...Item, title: "" }));
        }}
      >
        Enter
      </button>
      <div>
        {list.map((e) => (
          <div style={{ border: "2px solid black", margin: "1rem" }}>
            <h3>{e.title}</h3>
            <h4
              style={{ cursor: "pointer" }}
              onClick={() => {
                markDone(e);
              }}
            >
              Status: {e.completed ? "✅" : "❌"}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
