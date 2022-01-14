import React, { useEffect, useMemo } from 'react';
import TodoItemsList from '../todo-items-list/todo-items-list';
import { StyledCompletedTodos } from './styled';
import { Typography } from '@mui/material';
import Spinner from '../ui/spinner/spinner';
import { UseTypedSelector } from '../../hooks/useTypedSelector';
import { fetchCompletedTodos } from '../../store/action-creators/todo';
import { useDispatch } from 'react-redux';

const CompletedTodos = () => {
  const { todos, isLoading } = UseTypedSelector(state => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompletedTodos());
  }, [dispatch]);

  const renderTodosContent = useMemo(() => (
    <>
      { todos.length
        ? <StyledCompletedTodos><TodoItemsList todoItems={ todos }/></StyledCompletedTodos>
        : <Typography variant="h4">You have not any active todos :(</Typography> }
    </>
  ), [todos]);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    renderTodosContent
  );
};

export default CompletedTodos;
