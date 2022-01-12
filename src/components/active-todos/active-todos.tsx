import React, { useCallback, useEffect, useState } from 'react';
import TodoItemsList, { TodoItem } from '../todo-items-list/todo-items-list';
import { getAllTodo } from '../../api/todos';
import { Typography } from '@mui/material';

const ActiveTodos = () => {
  const [todos, setTodos] = useState<Array<TodoItem>>([]);

  const getTodoList = async () => {
    const { data } = await getAllTodo();
    setTodos(data);
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

  return (
    <>
      { todos.length
        ? <TodoItemsList setSingleTodoIsDone={ setTodoIsDone } todoItems={ todos }/>
        : <Typography variant="h4">You have not any active todos :(</Typography> }
    </>
  );
};

export default ActiveTodos;
