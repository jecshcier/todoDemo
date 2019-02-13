import React from "react";
import { connect } from "react-redux";
import { changeTodoName } from "../../redux/actions";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.data.name
    };
  }

  render() {
    return [
      <input
        key={`todo_i${this.props.data.id}`}
        type="text"
        value={this.state.value}
        onChange={event => {
          this.setState({
            value: event.target.value
          });
        }}
      />,
      <button
        key={`todo_b${this.props.data.id}`}
        onClick={e => {
          this.props.changeTodoName({
            todoList: this.props.todoList,
            id: this.props.data.id,
            name: this.state.value
          });
        }}
      >
        ok
      </button>
    ];
  }
}

export default connect(
  null,
  { changeTodoName }
)(EditTodo);
