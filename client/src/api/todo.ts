import { API } from './api';
import { TodoItem, TodoItemStructure } from '../components/todo-items-list/todo-items-list';


export interface RequestParams {
  isDone: boolean;
}
export const fetchTodos =  async (requestParams: RequestParams) => {
  const { data } = await API.get<TodoItem[]>(`/todo/all`, {
    params: requestParams
  });

  return data;
}

export const createTodo = async(todo: TodoItemStructure) => {
  return await API.post<TodoItemStructure>('/todo/create', todo);
};

export const updateTodo = (todo: TodoItem) => {
  return API.put<TodoItemStructure>(`/todo/update/${ todo._id }`, todo);
};

export const deleteTodo = (_id: string) => {
  return API.delete<TodoItemStructure>(`/todo/delete/${_id}`);
}
