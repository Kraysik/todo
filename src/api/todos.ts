import { API } from './axiosConfig';
import { TodoItem, TodoItemStructure } from '../components/todo-items-list/todo-items-list';

export const getAllTodo = (query: string = '') => {
  query = query !== '' ? `?${query}` : '';

  return API.get<TodoItem[]>(`/todos${query}`);
};

export const createTodo = ({ name, description, isDone }: TodoItemStructure) => {
  return API.post<TodoItemStructure>('/todo/create', {
    name,
    description,
    isDone,
  });
};

export const updateTodo = ({ name, description, isDone, _id }: TodoItem) => {
  return API.put<TodoItemStructure>(`/todo/update/${ _id }`, {
    name,
    description,
    isDone,
  });
};

export const deleteTodo = (_id: string) => {
  return API.delete<TodoItemStructure>(`/todo/delete/${_id}`);
}
