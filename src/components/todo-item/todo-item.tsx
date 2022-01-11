import React, { useCallback } from 'react';
import { TodoItem, TodoItemsListProps } from '../todo-items-list/todo-items-list';
import { StyledTodoItem } from './styled';
import { Checkbox, Grid } from '@mui/material';
import { updateTodo } from '../../api/todos';

type TodoItemProps = TodoItem & Omit<TodoItemsListProps, 'todoItems'>;

function Todo({ name, description, isDone, _id, setSingleTodoIsDone }: TodoItemProps) {
  const setTodoIsDone = useCallback(async () => {
    if (setSingleTodoIsDone) {
      try {
        await updateTodo({ name, description, _id, isDone: true });
        setSingleTodoIsDone({ name, description, _id, isDone: true });
      } catch (error) {
        console.log('Update Todo error', error);
      }
    }
  }, [name, description, _id, setSingleTodoIsDone]);

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
