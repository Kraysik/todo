import React, { useContext, useEffect, useMemo } from 'react';
import TodoItemsList from '../todo-items-list/todo-items-list';
import { Typography } from '@mui/material';
import Spinner from '../ui/spinner/spinner';
import { AppContext, AppContextInterface } from '../../context';

const ActiveTodos = () => {
  const {todos, isTodosShowed, getTodos, removeTodoFromList} = useContext(AppContext) as AppContextInterface;

  useEffect(() => {
    try {
      getTodos();
    } catch (error) {
      console.log('Fetch active todos error', error);
    }
  }, [getTodos]);

  const renderTodosContent = useMemo(() => (
    <>
      { todos.length
        ? <TodoItemsList removeTodoFromList={ removeTodoFromList } todoItems={ todos }/>
        : <Typography variant="h4">You have not any active todos :(</Typography> }
    </>
  ), [todos, removeTodoFromList]);

  return (
    <>
      { isTodosShowed
        ? renderTodosContent
        : <Spinner/> }
    </>
  );
};

export default ActiveTodos;
