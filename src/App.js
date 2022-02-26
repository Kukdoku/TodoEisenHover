import "./App.css";
import React from "react";
import TodoForm from "./components/TodoForm";
import { useSelector } from "react-redux";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { ShowComponent } from "./globalStates/Actions";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AllTask from "./components/AllTask";

function App() {
  const showComp = useSelector((state) => state.TaskReducer.showComponent);

  const dispatch = useDispatch();
  const list1 = ["card-1", "card", "1", "Urgent & Important", "🟢"];
  const list2 = ["card-2", "card", "2", "UnUrgent & Important", "🟠"];
  const list3 = ["card-3", "card", "3", "Urgent & UnImportant", "🟡"];
  const list4 = ["card-4", "card", "4", "UnUrgent & UnImportant", "🔴"];

  let mydata;
  if (showComp === "graphical") {
    mydata = (
      <DndProvider backend={HTML5Backend}>
        <div className="todoList_board">
          <TodoList id="board-1" className="board" data={list1} />

          <TodoList id="board-2" className="board" data={list2} />

          <TodoList id="board-3" className="board" data={list3} />

          <TodoList id="board-4" className="board" data={list4} />
        </div>
      </DndProvider>
    );
  } else if (showComp === "all") {
    mydata = <AllTask />;
  }
  // else {
  //   mydata = <p>tracker</p>;
  // }
  return (
    <div className="App">
      <TodoForm />
      <div className="app__component">
        <p
          style={showComp === "all" ? { color: "red" } : {}}
          onClick={() => dispatch(ShowComponent("all"))}
        >
          All Task
        </p>
        <p
          style={showComp === "graphical" ? { color: "red" } : {}}
          onClick={() => dispatch(ShowComponent("graphical"))}
        >
          graphical{" "}
        </p>
        {/* <p
          style={showComp === "tracker" ? { color: "red" } : {}}
          onClick={() => dispatch(ShowComponent("tracker"))}
        >
          tracker
        </p> */}
      </div>
      {mydata}
    </div>
  );
}

export default App;
