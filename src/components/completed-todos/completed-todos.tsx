import React, { useEffect, useState } from 'react';
import TodoItemsList, { TodoItem } from '../todo-items-list/todo-items-list';
import { StyledCompletedTodos } from './styled';
import { getAllTodo } from '../../api/todos';
import { Typography } from '@mui/material';

const CompletedTodos = () => {
  const [todos, setTodos] = useState<Array<TodoItem>>([]);

  const getTodos = async () => {
    const { data } = await getAllTodo('isDone=true');
    setTodos(data);
  };

  useEffect(() => {
    try {
      getTodos();
    } catch (error) {
      console.log('Fetch completed todos error', error);
    }
  }, []);

  return (
    <>
      { todos.length
        ? <StyledCompletedTodos><TodoItemsList todoItems={ todos }/></StyledCompletedTodos>
        : <Typography variant="h4">You have not any completed todos :(</Typography> }
    </>
  );
};

export default CompletedTodos;
