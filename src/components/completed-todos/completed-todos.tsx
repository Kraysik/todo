import React from 'react';
import { todoApi } from '../../services/todoService';
import { StyledCompletedTodos } from './styled';
import TodoItemsList from '../todo-items-list/todo-items-list';
import { Typography } from '@mui/material';
import Spinner from '../ui/spinner/spinner';

const CompletedTodos = () => {
  const { data: todos, isLoading } = todoApi.useFetchQuery('?isDone=true');

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <>
      { todos
        ? <StyledCompletedTodos><TodoItemsList todoItems={ todos }/></StyledCompletedTodos>
        : <Typography variant="h4">You have not any active todos :(</Typography> }
    </>
  );
};

export default CompletedTodos;
