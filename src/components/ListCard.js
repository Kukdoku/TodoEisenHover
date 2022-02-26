import React from "react";
import { useSelector } from "react-redux";
import "./listCard.css";
import Task from "./Task";
import { useDrop } from "react-dnd";
import "./todoList.css";
import { useDispatch } from "react-redux";
import { DragAndDrop } from "../globalStates/Actions";

function ListCard(props) {
  const myTodoList = useSelector((state) => state.TaskReducer.TaskList);
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "text",
    drop: (item) => addImageToBoard(item.id, props.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (itemId, category) => {
    // console.log("hi", p, id);
    dispatch(DragAndDrop({ itemId, category }));
  };
  return (
    <div
      className={`${props.className} ${"card__" + props.category} card`}
      id={props.id}
      ref={drop}
    >
      {/* {props.children} */}
      <h5 style={{ textAlign: "center", marginTop: "5px" }}>
        {props.color} {props.categoryName}
      </h5>
      {myTodoList.map((task) =>
        task.category === props.category ? (
          <Task task={task} key={task.id} />
        ) : null
      )}
    </div>
  );
}

export default ListCard;
