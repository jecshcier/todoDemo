import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      edit: false
    };
  }

  render() {
    const divStyle = { marginTop: "10px" };
    const addStyle = { color: "blue", cursor: "pointer" };
    return this.state.edit ? (
      <div style={divStyle}>
        <input
          key={`add_todo`}
          type="text"
          value={this.state.value}
          onChange={event => {
            this.setState({
              value: event.target.value
            });
          }}
        />
        <button
          key={`add_todo_b`}
          onClick={e => {
            if (!this.state.value || this.state.value === "") {
              alert("Cannot create empty todo!");
              this.setState({
                edit: false
              });
              return false;
            }
            this.props.addTodo({
              todoList: this.props.todoList,
              todoListSortArr: this.props.todoListSortArr,
              id: +new Date(),
              name: this.state.value
            });
            this.setState({
              edit: false,
              value: ""
            });
          }}
        >
          add
        </button>
      </div>
    ) : (
      <div style={divStyle}>
        <a
          style={addStyle}
          onClick={() => {
            this.setState({
              edit: true
            });
          }}
        >
          +Add
        </a>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
