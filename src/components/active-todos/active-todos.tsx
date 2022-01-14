import React, { useEffect, useMemo } from 'react';
import TodoItemsList from '../todo-items-list/todo-items-list';
import { Typography } from '@mui/material';
import Spinner from '../ui/spinner/spinner';
import { UseTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../../store/action-creators/todo';

const ActiveTodos = () => {
  const { todos, isLoading } = UseTypedSelector(state => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const renderTodosContent = useMemo(() => (
    <>
      { todos.length
        ? <TodoItemsList todoItems={ todos }/>
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

export default ActiveTodos;
