import React, { useContext, useEffect, useMemo } from 'react';
import TodoItemsList from '../todo-items-list/todo-items-list';
import { StyledCompletedTodos } from './styled';
import { Typography } from '@mui/material';
import Spinner from '../ui/spinner/spinner';
import { AppContext, AppContextInterface } from '../../context';

const CompletedTodos = () => {
  const {todos, isTodosShowed, getTodos} = useContext(AppContext) as AppContextInterface;

  useEffect(() => {
    try {
      getTodos('isDone=true');
    } catch (error) {
      console.log('Fetch completed todos error', error);
    }
  }, [getTodos]);

  const renderTodosContent = useMemo(() => (
    <>
      { todos.length
        ? <StyledCompletedTodos><TodoItemsList todoItems={ todos }/></StyledCompletedTodos>
        : <Typography variant="h4">You have not any active todos :(</Typography> }
    </>
  ), [todos]);

  return (
    <>
      { isTodosShowed
        ? renderTodosContent
        : <Spinner/> }
    </>
  );
};

export default CompletedTodos;
