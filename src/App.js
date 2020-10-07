import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
// import TaskList from "./components/TaskList";

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <Input />
          <Button />
        </div>
        {/* <TaskList /> */}
      </>
    );
  }
}
export default App;
