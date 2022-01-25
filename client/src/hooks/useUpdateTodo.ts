import { useMutation, useQueryClient } from 'react-query';
import { TodoItem } from '../components/todo-items-list/todo-items-list';
import { updateTodo } from '../api/todo';

export const useUpdateTodo = () => {
  const client = useQueryClient();
  const mutation = useMutation((newTodo: TodoItem) => updateTodo(newTodo), {
    onSuccess: () => {
      client.invalidateQueries('todos');
    },
  });

  return mutation;
}
