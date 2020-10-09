import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import TaskList from "./components/TaskList";
import { useDispatch, useSelector, useStore } from "react-redux";

function App() {
  const taskValue = useSelector((state) => state.taskValue);
  console.log(taskValue);
  return (
    <>
      <div>
        <Input />
        <Button />
      </div>
      <TaskList />
    </>
  );
}

export default App;
