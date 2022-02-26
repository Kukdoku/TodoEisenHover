import React, { useState } from "react";
import "./todoForm.css";
import { useDispatch } from "react-redux";
import { updateTaskList } from "../globalStates/Actions";
import { v4 as uuidv4 } from "uuid";

function TodoForm() {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("1");

  const dispatch = useDispatch();

  const AddTask = (e) => {
    e.preventDefault();
    dispatch(
      updateTaskList({
        id: uuidv4(),
        task: task,
        category: category,
        completed: false,
        timestamp: new Date(),
      })
    );
    setTask('')
  };
  return (
    <div className="todoForm">
      <form onSubmit={AddTask} className="todoForm__fields">
        <input
          placeholder="write your task"
          onChange={(e) => setTask(e.target.value)}
          className="todoForm__textInput"
          maxLength="25"
        />
        <select
          id="selection"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          className="todoForm__selection"
        >
          <option value="1">🟢 </option>
          <option value="2">🟠 </option>
          <option value="3">🟡 </option>
          <option value="4">🔴 </option>
        </select>
        <button
          type="submit"
          className="todoForm__button"
          disabled={task.trim().length === 0}
        >
          Confirm{" "}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
