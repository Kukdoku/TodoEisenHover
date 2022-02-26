const initialState = {
  TaskList: localStorage.getItem("myList")
    ? JSON.parse(localStorage.getItem("myList"))
    : [],
  showComponent: "categorical",
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATETASKLIST":
      if (state.TaskList) {
        let todo = [...state.TaskList, action.payload];
        // console.log("todo", todo);
        localStorage.setItem("myList", JSON.stringify(todo));
        state.TaskList = todo;
      } else {
        // console.log(action.payload);
        localStorage.setItem("myList", JSON.stringify(action.payload));
        state.TaskList = [action.payload];
      }

      return { ...state };
    case "DRAGANDDROP":
      let lst = state.TaskList;
      let n = lst.length;
      let itemid = action.payload.itemId;
      let cate = action.payload.category;
      // console.log(cate.slice(5));
      for (let i = 0; i < n; i++) {
        if (lst[i].id === itemid) {
          lst[i] = { ...lst[i], category: cate.slice(5) };
          break;
        }
      }
      localStorage.setItem("myList", JSON.stringify(lst));
      state.TaskList = lst;
      // console.log(lst);

      return { ...state };
    case "SHOWCOMPONENT":
      return { ...state, showComponent: action.payload };
    case "UPDATETASKSTATUS":
      let lst1 = state.TaskList;
      let n1 = lst1.length;
      let itemid1 = action.payload;
      for (let i = 0; i < n1; i++) {
        if (lst1[i].id === itemid1) {
          lst1[i] = { ...lst1[i], completed: !lst1[i].completed };
          break;
        }
      }
      localStorage.setItem("myList", JSON.stringify(lst1));
      state.TaskList = lst1;
      return { ...state };

    case "DELETETASK":
      let lst2 = state.TaskList;
      let n2 = lst2.length;
      let itemid2 = action.payload;
      let index;
      for (let i = 0; i < n2; i++) {
        if (lst2[i].id === itemid2) {
          index = i;
          break;
        }
      }
      lst2.splice(index, 1);
      localStorage.setItem("myList", JSON.stringify(lst2));
      state.TaskList = lst2;
      return { ...state };

    default:
      return state;
  }
};

export default TaskReducer;
