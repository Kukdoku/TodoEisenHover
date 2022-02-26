import React from "react";
// import { useSelector } from "react-redux";

import ListCard from "./ListCard";

function TodoList(props) {
  // const myTodoList = useSelector((state) => state.TaskReducer);

  return (
    <div id={props.id} className={props.className}>
      <ListCard
        id={props.data ? props.data[0] : null}
        className={props.data ? props.data[1] : null}
        category={props.data ? props.data[2] : null}
        categoryName={props.data ? props.data[3] : null}
        color={props.data ? props.data[4] : null}
      />
    </div>
  );
}

export default TodoList;
