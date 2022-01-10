import React, { useCallback } from 'react';
import { TodoItem, TodoItemsListProps } from '../todo-items-list/todo-items-list';
import { StyledTodoItem } from './styled';
import { Checkbox, Grid } from '@mui/material';

type TodoItemProps = TodoItem & Omit<TodoItemsListProps, 'todoItems'>;

function Todo({ name, description, isDone, id, setSingleTodoIsDone }: TodoItemProps) {
  const setTodoIsDone = useCallback(() => {
    if (setSingleTodoIsDone) setSingleTodoIsDone({ name, description, id, isDone: true });
  }, [name, description, id, setSingleTodoIsDone]);

  return (
    <StyledTodoItem container>
      { !isDone && (
        <Grid item className="check">
          <Checkbox onChange={ setTodoIsDone }/>
        </Grid>
      ) }
      <Grid item>
        <div className="name">{ name }</div>
        { description ?? <div className="description">{ description }</div> }
      </Grid>
    </StyledTodoItem>
  );
}

export default Todo;
