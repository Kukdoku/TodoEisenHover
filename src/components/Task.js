import React from "react";
import "./task.css";
import { useDrag } from "react-dnd";

function Task(props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item: { id: props.task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <p
        className="card__text"
        ref={drag}
        style={{ border: isDragging ? "2px solid gray" : "0px" }}
      >
        <span style={{ marginRight: "4px" }}>👉</span> {props.task.task}
      </p>
    </>
  );
}

export default Task;
