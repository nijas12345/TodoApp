import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [val, setVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (val.trim() === "") {
      console.log(val);
      return;
    }
    addTodo(val);
    setVal("");
  };
  
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={val}
        placeholder="What is the task today"
        onChange={(e) => setVal(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
