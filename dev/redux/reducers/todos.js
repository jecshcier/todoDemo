import TYPES from "../actionTypes";

const initialState = {
  todoList: {},
  todoListSortArr: []
};

const getTime = function() {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const min =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const sec =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOAD_TODOS: {
      const data = action.payload;
      return {
        ...state,
        ...data
      };
    }
    case TYPES.CHANGE_TODO: {
      console.log(action.payload);
      const { todoList, id } = action.payload;
      todoList[id].flag = !todoList[id].flag;
      todoList[id].updateTime = getTime();
      window.localStorage.setItem("todoList", JSON.stringify(todoList));
      return {
        ...state,
        todoList
      };
    }
    case TYPES.EDIT_TODO: {
      console.log(action.payload);
      const { todoList, id } = action.payload;
      todoList[id].edit = true;
      return {
        ...state,
        todoList
      };
    }

    case TYPES.CHANGE_TODO_NAME: {
      console.log(action.payload);
      const { todoList, id, name } = action.payload;
      todoList[id].name = name;
      todoList[id].edit = false;
      window.localStorage.setItem("todoList", JSON.stringify(todoList));
      return {
        ...state,
        todoList
      };
    }

    case TYPES.ADD_TODO: {
      console.log(action.payload);
      const { todoList, id, name, todoListSortArr } = action.payload;
      todoList[id] = {};
      todoList[id].id = id;
      todoList[id].name = name;
      todoList[id].createTime = getTime();
      todoList[id].updateTime = getTime();
      todoList[id].flag = false;
      todoListSortArr.splice(0, 0, `${id}`);
      window.localStorage.setItem("todoList", JSON.stringify(todoList));
      window.localStorage.setItem(
        "todoListSortArr",
        JSON.stringify(todoListSortArr)
      );
      return {
        ...state,
        todoList
      };
    }

    case TYPES.SORT_TODO: {
      console.log(action.payload);
      const { todoListSortArr } = action.payload;
      window.localStorage.setItem(
        "todoListSortArr",
        JSON.stringify(todoListSortArr)
      );
      return {
        ...state,
        todoListSortArr
      };
    }

    case TYPES.DELETE_TODO: {
      console.log(action.payload);
      const { todoList, index, todoListSortArr, id } = action.payload;
      delete todoList[id];
      todoListSortArr.splice(index, 1);
      window.localStorage.setItem("todoList", JSON.stringify(todoList));
      window.localStorage.setItem(
        "todoListSortArr",
        JSON.stringify(todoListSortArr)
      );
      return {
        ...state,
        todoList,
        todoListSortArr
      };
    }
    case TYPES.SEARCH_TODO: {
      console.log(action.payload);
      const { todoList, key } = action.payload;
      if (key !== "" && key) {
        for (let el in todoList) {
          if (
            todoList[el].name.toLowerCase().indexOf(key.toLowerCase()) === -1
          ) {
            todoList[el].hide = true;
          } else {
            todoList[el].hide = false;
          }
        }
      } else {
        for (let el in todoList) {
          todoList[el].hide = false;
        }
      }

      return {
        ...state,
        todoList
      };
    }
    default:
      return state;
  }
}
