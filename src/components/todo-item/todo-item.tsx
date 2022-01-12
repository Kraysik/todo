import React, { useCallback } from 'react';
import { TodoItem, TodoItemsListProps } from '../todo-items-list/todo-items-list';
import { StyledDeleteBtn, StyledDeleteBtnWrap, StyledTodoItem } from './styled';
import { Checkbox, Grid } from '@mui/material';
import { deleteTodo, updateTodo } from '../../api/todos';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const handleDeleteTodo = useCallback(async () => {
    try {
      await deleteTodo(_id);
    } catch (error) {
      console.log('Delete todo error', error);
    }
  }, [_id])

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
      <StyledDeleteBtnWrap item className="delete">
        <StyledDeleteBtn container item justifyContent="center" alignItems="center" onClick={handleDeleteTodo}>
          <DeleteIcon/>
        </StyledDeleteBtn>
      </StyledDeleteBtnWrap>
    </StyledTodoItem>
  );
}

export default Todo;
