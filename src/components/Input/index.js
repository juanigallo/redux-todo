import React from "react";
import { connect } from "react-redux";
import { changeTaskValue } from "../../store";

class Input extends React.Component {
  handleChange(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(changeTaskValue(value));
  }

  render() {
    const { taskValue } = this.props;
    return (
      <input
        onChange={(e) => this.handleChange(e)}
        type="text"
        value={taskValue}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    taskValue: state.taskValue
  };
}
export default connect(mapStateToProps)(Input);
