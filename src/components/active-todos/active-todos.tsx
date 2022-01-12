import React, { useCallback, useEffect, useMemo, useState } from 'react';
import TodoItemsList, { TodoItem } from '../todo-items-list/todo-items-list';
import { getAllTodo } from '../../api/todos';
import { Typography } from '@mui/material';
import Spinner from '../ui/spinner/spinner';

const ActiveTodos = () => {
  const [todos, setTodos] = useState<Array<TodoItem>>([]);
  const [isTodos, setIsTodos] = useState<boolean>(false);

  const getTodoList = async () => {
    const { data } = await getAllTodo();
    setTodos(data);

    setIsTodos(true);
  };
  useEffect(() => {
    try {
      getTodoList();
    } catch (error) {
      console.log('Fetch active todos error', error);
    }
  }, []);

  const setTodoIsDone = useCallback((todo) => {
    setTodos(todos.filter(t => t._id !== todo._id));
  }, [todos]);

  const renderTodosContent = useMemo(() => (
    <>
      { todos.length
        ? <TodoItemsList setSingleTodoIsDone={ setTodoIsDone } todoItems={ todos }/>
        : <Typography variant="h4">You have not any active todos :(</Typography> }
    </>
  ), [todos, setTodoIsDone]);

  return (
    <>
      { isTodos
        ? renderTodosContent
        : <Spinner/> }
    </>
  );
};

export default ActiveTodos;
