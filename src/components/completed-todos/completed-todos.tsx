import React, { useEffect, useMemo, useState } from 'react';
import TodoItemsList, { TodoItem } from '../todo-items-list/todo-items-list';
import { StyledCompletedTodos } from './styled';
import { getAllTodo } from '../../api/todos';
import { Typography } from '@mui/material';
import Spinner from '../ui/spinner/spinner';

const CompletedTodos = () => {
  const [todos, setTodos] = useState<Array<TodoItem>>([]);
  const [isTodos, setIsTodos] = useState<boolean>(false);

  const getTodos = async () => {
    const { data } = await getAllTodo('isDone=true');
    setTodos(data);

    setIsTodos(true);
  };

  useEffect(() => {
    try {
      getTodos();
    } catch (error) {
      console.log('Fetch completed todos error', error);
    }
  }, []);

  const renderTodosContent = useMemo(() => (
    <>
      { todos.length
        ? <StyledCompletedTodos><TodoItemsList todoItems={ todos }/></StyledCompletedTodos>
        : <Typography variant="h4">You have not any active todos :(</Typography> }
    </>
  ), [todos]);

  return (
    <>
      { isTodos
        ? renderTodosContent
        : <Spinner/> }
    </>
  );
};

export default CompletedTodos;
