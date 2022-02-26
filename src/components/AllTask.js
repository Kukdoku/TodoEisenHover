import React from "react";
import { useSelector } from "react-redux";
import "./allTask.css";

import SingleTask from "./SingleTask";

function AllTask() {
  const completeList = useSelector((state) => state.TaskReducer);

  return (
    <div className="allTask">
      {completeList.TaskList.map((data) => (
        <SingleTask key={data.id} data={data} />
      ))}
    </div>
  );
}

export default AllTask;
