import { createSlice } from '@reduxjs/toolkit';

function dataFromLocalStorage() {
  return (
    JSON.parse(localStorage.getItem("todos")) || {
      todos: []
    }
  )
}
 
export const todoSlice = createSlice({
  name: 'todo',
  initialState: dataFromLocalStorage(),
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
      todoSlice.caseReducers.setLocal(state);
    },
    removeTodo: (state, { payload }) => {
     const filteredTodos = state.todos = state.todos.filter((item) => item.id !== payload);
     state.todos = filteredTodos;
     todoSlice.caseReducers.setLocal(state);
    },
    changeStateTodo: (state, { payload }) => {
      const todo = state.todos.find((item) => item.id === payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      todoSlice.caseReducers.setLocal(state);
    },
    setLocal: (state) => {
      localStorage.setItem('todos', JSON.stringify(state))
    }
  },
});

export const { addTodo, removeTodo, changeStateTodo } = todoSlice.actions;
export default todoSlice.reducer;
