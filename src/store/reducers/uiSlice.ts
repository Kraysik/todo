import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  isCreate: boolean;
  isUncompletedTodos: boolean;
}

const initialState: UiState = {
  isCreate: false,
  isUncompletedTodos: true,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showCreateTodoForm(state) {
      state.isCreate = !state.isCreate;
    },
    changeCurrentTodoComponent(state) {
      state.isUncompletedTodos = !state.isUncompletedTodos
    },
  },
});

export const {showCreateTodoForm, changeCurrentTodoComponent} = uiSlice.actions;

export default uiSlice.reducer;
