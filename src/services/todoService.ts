import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TodoItem, TodoItemStructure } from '../components/todo-items-list/todo-items-list';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
  tagTypes: ['Todos'],
  endpoints: (build) => ({
    fetch: build.query<TodoItem[], string>({
      query: (query: string = '') => ({ url: `/todos${ query }` }),
      providesTags: () => ['Todos'],
    }),

    delete: build.mutation<[], string>({
      query: (id: string) => ({
        url: `/todo/delete/${ id }`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),

    update: build.mutation<TodoItem, TodoItem>({
      query: (todo: TodoItem) => ({
        url: `/todo/update/${ todo._id }`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),

    create: build.mutation<TodoItem, TodoItemStructure>({
      query: (todo: TodoItemStructure) => ({
        url: '/todo/create',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});
