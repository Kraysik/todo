import React from 'react';
import { todoApi } from '../../services/todoService';
import TodoItemsList from '../todo-items-list/todo-items-list';
import { Typography } from '@mui/material';
import Spinner from '../ui/spinner/spinner';


const ActiveTodos = () => {
  const { data: todos, isLoading } = todoApi.useFetchQuery('');

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <>
      { todos
        ? <TodoItemsList todoItems={ todos }/>
        : <Typography variant="h4">You have not any active todos :(</Typography> }
    </>
  );
};

export default ActiveTodos;
