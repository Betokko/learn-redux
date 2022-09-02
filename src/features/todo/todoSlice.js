import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare: (text) => {
        const id = nanoid();
        return { payload: { id, text, completed: false } };
      },
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo } = todoSlice.actions;
