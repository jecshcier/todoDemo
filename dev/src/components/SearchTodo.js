import React from "react";
import connect from "react-redux/es/connect/connect";
import {
  searchTodo,
  changeTodo,
  editTodo,
  deleteTodo
} from "../../redux/actions";

class SearchTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return [
      <input
        key={"todo_s"}
        type="text"
        placeholder={"keyword to search"}
        value={this.state.value}
        onChange={event => {
          if (this.timer) {
            clearTimeout(this.timer);
          }
          this.setState({
            value: event.target.value
          });
          this.timer = setTimeout(() => {
            this.props.searchTodo({
              todoList: this.props.todoList,
              key: this.state.value
            });
          }, 1000);
        }}
      />
    ];
  }
}
export default connect(
  state => {
    const { todos } = state;
    return { todos };
  },
  { searchTodo }
)(SearchTodo);
