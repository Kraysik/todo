import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import TodoItemsList from '../todo-items-list/todo-items-list';
import { Typography } from '@mui/material';
import Spinner from '../ui/spinner/spinner';
import { AppContext, AppContextInterface } from '../../context';

const ActiveTodos = () => {
  const {todos, setTodos, isTodosShowed, getTodos} = useContext(AppContext) as AppContextInterface;

  useEffect(() => {
    try {
      getTodos();
    } catch (error) {
      console.log('Fetch active todos error', error);
    }
  }, [getTodos]);

  const setTodoIsDone = useCallback((todo) => {
    setTodos(todos.filter(t => t._id !== todo._id));
  }, [todos, setTodos]);

  const renderTodosContent = useMemo(() => (
    <>
      { todos.length
        ? <TodoItemsList setSingleTodoIsDone={ setTodoIsDone } todoItems={ todos }/>
        : <Typography variant="h4">You have not any active todos :(</Typography> }
    </>
  ), [todos, setTodoIsDone]);

  return (
    <>
      { isTodosShowed
        ? renderTodosContent
        : <Spinner/> }
    </>
  );
};

export default ActiveTodos;
