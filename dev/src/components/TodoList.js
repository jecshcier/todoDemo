import React from "react";
import connect from "react-redux/es/connect/connect";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  const todoList = todos.todoList;
  let todo = todos.todoListSortArr;
  let finishedCount = 0;
  let totalCount = 0;
  todo = todo.map((el, index) => {
    totalCount++;
    if (todoList[el].flag) {
      finishedCount++;
    }
    const style = {
      cursor: "pointer",
      margin: "10px 0",
      boderBottom: "1px solid #ccc",
      display: "flex"
    };

    if (todoList[el].hide) {
      style.display = "none";
    }

    return (
      <Todo
        key={`todo${todoList[el].id}`}
        index={index}
        style={style}
        todoList={todoList}
        todoListSortArr={todos.todoListSortArr}
        data={todoList[el]}
      />
    );
  });
  const ulStyle = {
    listStyle: "none",
    userSelect: "none",
    padding: "0",
    margin: "0"
  };
  const countStyle = { color: "green", marginTop: "10px" };
  return (
    <ul style={ulStyle}>
      {todo.length ? todo : <li>no todo</li>}
      <li style={countStyle}>
        finished {finishedCount}&nbsp;&nbsp;&nbsp;total {totalCount}
      </li>
    </ul>
  );
};

export default connect(
  state => {
    const { todos } = state;
    return { todos };
  },
  null
)(TodoList);
