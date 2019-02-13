import TYPES from "./actionTypes"

export const changeTodo = payload => ({
  type: TYPES.CHANGE_TODO,
  payload: {
    ...payload,
  }
})

export const editTodo = payload => ({
  type: TYPES.EDIT_TODO,
  payload: {
    ...payload
  }
})

export const changeTodoName = payload => ({
  type: TYPES.CHANGE_TODO_NAME,
  payload: {
    ...payload
  }
})

export const deleteTodo = payload => ({
  type: TYPES.DELETE_TODO,
  payload: {
    ...payload
  }
})

export const addTodo = payload => ({
  type: TYPES.ADD_TODO,
  payload: {
    ...payload
  }
})

export const loadTodos = payload => ({
  type: TYPES.LOAD_TODOS,
  payload: {
    ...payload
  }
})

export const searchTodo = payload => ({
  type: TYPES.SEARCH_TODO,
  payload: {
    ...payload
  }
})

export const sortTodo = payload => ({
  type: TYPES.SORT_TODO,
  payload: {
    ...payload
  }
})
