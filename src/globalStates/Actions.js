export const ShowComponent = (flg) => {
  return { type: "SHOWCOMPONENT", payload: flg };
};

export const DragAndDrop = (updatedInfo) => {
  return { type: "DRAGANDDROP", payload: updatedInfo };
};

export const updateTaskList = (tsk) => {
  return { type: "UPDATETASKLIST", payload: tsk };
};

export const updateTaskStatus = (id) => {
  return { type: "UPDATETASKSTATUS", payload: id };
};

export const DeleteTask = (id) => {
  return { type: "DELETETASK", payload: id };
};


