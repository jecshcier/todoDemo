import React from "react";
import { connect } from "react-redux";
import EditTodo from "./EditTodo";
import {
  changeTodo,
  deleteTodo,
  editTodo,
  sortTodo
} from "../../redux/actions";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      hover: false
    };
  }

  render() {
    const editStyle = { marginLeft: "10px", color: "blue" };
    const deleteStyle = { marginLeft: "10px", color: "red" };
    const finishFontStyle = { fontWeight: "bold" };
    const timeStyle = { color: "#ccc", fontSize: "12px" };
    return (
      <li
        onDragStart={event => {
          console.log(event.target);
          event.dataTransfer.setData(
            "Text",
            JSON.stringify({
              index: this.props.index,
              id: this.props.data.id
            })
          );
        }}
        draggable={true}
        onDragOver={event => {
          event.preventDefault();
        }}
        onDrop={event => {
          event.preventDefault();
          const selfIndex = this.props.index;
          const insertData = JSON.parse(event.dataTransfer.getData("Text"));
          console.log(selfIndex);
          console.log(insertData);
          let arr = this.props.todoListSortArr;
          console.log(arr);
          delete arr[insertData.index];
          arr.splice(selfIndex + 1, 0, insertData.id.toString());
          arr = Object.values(arr);
          console.log(arr);
          this.props.sortTodo({
            todoListSortArr: arr
          });
        }}
        key={"todo" + this.props.data.id}
        style={this.props.style}
        onMouseEnter={() => {
          this.setState({
            hover: true
          });
        }}
        onMouseLeave={() => {
          this.setState({
            hover: false
          });
        }}
        onMouseOver={() => {
          this.setState({
            hover: true
          });
        }}
      >
        <input
          type="checkbox"
          checked={this.props.data.flag}
          onChange={() => {
            this.props.changeTodo({
              todoList: this.props.todoList,
              id: this.props.data.id
            });
          }}
        />
        <div>
          {this.props.data.edit ? (
            <EditTodo todoList={this.props.todoList} data={this.props.data} />
          ) : (
            <span style={this.props.data.flag ? finishFontStyle : {}}>
              {this.props.data.name}
              {this.state.hover ? (
                <span>
                  <a
                    style={editStyle}
                    onClick={e => {
                      e.stopPropagation();
                      this.props.editTodo({
                        todoList: this.props.todoList,
                        id: this.props.data.id
                      });
                    }}
                  >
                    edit
                  </a>
                  <a
                    style={deleteStyle}
                    onClick={e => {
                      e.stopPropagation();
                      this.props.deleteTodo({
                        todoList: this.props.todoList,
                        id: this.props.data.id,
                        todoListSortArr: this.props.todoListSortArr,
                        index: this.props.index
                      });
                    }}
                  >
                    delete
                  </a>
                </span>
              ) : null}
            </span>
          )}
          <div style={timeStyle}>createTime:{this.props.data.createTime}</div>
          <div style={timeStyle}>updateTime:{this.props.data.updateTime}</div>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { changeTodo, editTodo, deleteTodo, sortTodo }
)(Todo);
