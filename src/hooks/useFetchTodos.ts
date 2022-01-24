import { useQuery } from 'react-query';
import { TodoItem } from '../components/todo-items-list/todo-items-list';
import { fetchTodos } from '../api/todo';

export const useFetchTodos = () => {
  return useQuery<TodoItem[], Error>('todos', async () => await fetchTodos({ isDone: false }));
}

export const useFetchCompletedTodos = () => {
  return useQuery<TodoItem[], Error>(['todos', 'completed'], async () => await fetchTodos({ isDone: true }));
}
