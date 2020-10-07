import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const InitialState = {
  taskValue: "",
  tasks: []
};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "CHANGE_TASK_VALUE":
      return { ...state, taskValue: action.value };
    case "ADD_TASK":
      const { tasks, taskValue } = state;

      return {
        ...state,
        tasks: [...tasks, taskValue],
        taskValue: ""
      };
    default:
      return state;
  }
};

export const changeTaskValue = (inputValue) => (dispatch) => {
  return dispatch({
    type: "CHANGE_TASK_VALUE",
    value: inputValue
  });
};

export const addTask = () => (dispatch) => {
  return dispatch({
    type: "ADD_TASK"
  });
};

export function initializeStore() {
  return createStore(reducer, InitialState, applyMiddleware(thunkMiddleware));
}
