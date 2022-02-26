import React, { useState } from "react";
import { updateTaskStatus } from "../globalStates/Actions";
import { useDispatch} from "react-redux";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteTask } from "../globalStates/Actions";

function SingleTask({ data }) {
  const [status, setStatus] = useState(data.completed);
//   const completeList = useSelector((state) => state.TaskReducer.TaskList);
  const dispatch = useDispatch();

  const color = (cateory) => {
    if (cateory === "1") {
      return "green";
    } else if (cateory === "2") {
      return "orange";
    } else if (cateory === "3") {
      return "yellow";
    } else {
      return "red";
    }
  };

  const changeStatus = (id) => {
    setStatus(!status);
    dispatch(updateTaskStatus(id));
  };

  return (
    <div className="allTask__tsk" key={data.id}>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircleIcon
          style={{
            color: color(data.category),
            width: "15px",
            marginRight: "10px",
          }}
        />

        <span style={status ? { textDecoration: "line-through" } : null}>
          {data.task}
        </span>
      </p>

      <div>
        <CheckCircleOutlineIcon
          style={{ cursor: "pointer", margin: "0px 10px" }}
          onClick={() => changeStatus(data.id)}
        />
        <DeleteIcon
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => dispatch(DeleteTask(data.id))}
        />
      </div>
    </div>
  );
}

export default SingleTask;
