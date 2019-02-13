import React from "react";
import { connect } from "react-redux";
import { loadTodos } from "../redux/actions";
import TodoList from "./components/TodoList";
import SearchTodo from "./components/SearchTodo";
import AddTodo from "./components/AddTodo.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let todoList = {};
    let todoListSortArr = [];
    if (!window.localStorage.getItem("todoList")) {
      todoList = {
        1: {
          id: 1,
          name: "based on React",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        2: {
          id: 2,
          name: "can not use UI libraries",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        3: {
          id: 3,
          name: "can not use already existing TODO-List project",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        4: {
          id: 4,
          name: "data will not exceed over 1MB",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        5: {
          id: 5,
          name: "keep status when reopen or refresh the page",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        6: {
          id: 6,
          name: "show todos",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        7: {
          id: 7,
          name: "show finished tasks",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        8: {
          id: 8,
          name: "only need titles, no contents",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        9: {
          id: 9,
          name: "use a checkbox to switch status of an item",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        10: {
          id: 10,
          name: "can âdrag & dropâ to change order",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        11: {
          id: 11,
          name: "can remove one item",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        12: {
          id: 12,
          name: "can modify title directly",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        13: {
          id: 13,
          name: "task creating time",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        14: {
          id: 14,
          name: "status changing time",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        15: {
          id: 15,
          name: "status travel",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        16: {
          id: 16,
          name: "search tasks in the list",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        },
        17: {
          id: 17,
          name: "show the total count of todos and finished tasks",
          flag: false,
          createTime: "2018-02-12 21:00:00",
          updateTime: "2018-02-12 21:00:00"
        }
      };
      todoListSortArr = Object.keys(todoList);
      window.localStorage.setItem("todoList", JSON.stringify(todoList));
      window.localStorage.setItem(
        "todoListSortArr",
        JSON.stringify(todoListSortArr)
      );
    } else {
      todoList = JSON.parse(window.localStorage.getItem("todoList"));
      todoListSortArr = JSON.parse(
        window.localStorage.getItem("todoListSortArr")
      );
    }
    this.props.loadTodos({
      todoList,
      todoListSortArr
    });
  }

  render() {
    const { todoList, todoListSortArr } = this.props.todos;
    return (
      <div className="App">
        <h2
          onDrop={event => {
            event.preventDefault();
            console.log(event);
          }}
        >
          Todo List
        </h2>
        <SearchTodo todoList={todoList} />
        <AddTodo todoList={todoList} todoListSortArr={todoListSortArr} />
        <TodoList />
      </div>
    );
  }
}

export default connect(
  state => {
    return state;
  },
  { loadTodos }
)(App);
