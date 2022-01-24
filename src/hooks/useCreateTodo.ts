import { useMutation, useQueryClient } from 'react-query';
import { createTodo } from '../api/todo';
import { TodoItemStructure } from '../components/todo-items-list/todo-items-list';

export const useCreateTodo = () => {
  const client = useQueryClient();
  const mutation = useMutation((newTodo: TodoItemStructure) => createTodo(newTodo), {
    onSuccess: () => {
      client.invalidateQueries('todos');
    },
  });

  return mutation;
};
