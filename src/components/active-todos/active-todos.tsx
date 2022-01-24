import React from 'react';
import { useFetchTodos } from '../../hooks/useFetchTodos';
import Spinner from '../ui/spinner/spinner';
import TodoItemsList from '../todo-items-list/todo-items-list';
import { Typography } from '@mui/material';


const ActiveTodos = () => {
  const fetchTodosQ = useFetchTodos();

  if (fetchTodosQ.isLoading) {
    return <Spinner/>;
  }

  if (fetchTodosQ.isError) {
    return <Typography variant="h4">Houston, we have a problem :(</Typography>;
  }

  return (
    <>
      { fetchTodosQ.data
        ? <TodoItemsList todoItems={ fetchTodosQ.data }/>
        : <Typography variant="h4">You have not any active todos :(</Typography> }
    </>
  );
};

export default ActiveTodos;
