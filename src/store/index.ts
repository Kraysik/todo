import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './reducers/uiSlice';
import { todoApi } from '../services/todoService';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
