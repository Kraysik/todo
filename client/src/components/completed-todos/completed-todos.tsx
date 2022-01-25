import React from 'react';
import { useFetchCompletedTodos } from '../../hooks/useFetchTodos';
import Spinner from '../ui/spinner/spinner';
import { StyledCompletedTodos } from './styled';
import TodoItemsList from '../todo-items-list/todo-items-list';
import { Typography } from '@mui/material';

const CompletedTodos = () => {
  const fetchTodosQ = useFetchCompletedTodos();

  if (fetchTodosQ.isLoading) {
    return <Spinner/>;
  }

  if (fetchTodosQ.isError) {
    return <Typography variant="h4">Houston, we have a problem :(</Typography>;
  }

  return (
    <>
      { fetchTodosQ.data
        ? <StyledCompletedTodos><TodoItemsList todoItems={ fetchTodosQ.data }/></StyledCompletedTodos>
        : <Typography variant="h4">You have not any active todos :(</Typography> }
    </>
  );
};

export default CompletedTodos;
