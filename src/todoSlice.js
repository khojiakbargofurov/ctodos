import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((item) => item.id !== payload);
    },
    changeStateTodo: (state, { payload }) => {
      const todo = state.todos.find((item) => item.id === payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, changeStateTodo } = todoSlice.actions;
export default todoSlice.reducer;
