import { useMutation, useQueryClient } from 'react-query';
import { deleteTodo } from '../api/todo';

export const useDeleteTodo = () => {
  const client = useQueryClient();
  const mutation = useMutation((id: string) => deleteTodo(id), {
    onSuccess: () => {
      client.invalidateQueries('todos');
    },
  });

  return mutation;
}
