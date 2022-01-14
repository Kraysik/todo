import React, { useCallback } from 'react';
import { TodoItem, TodoItemsListProps } from '../todo-items-list/todo-items-list';
import { StyledDeleteBtn, StyledDeleteBtnWrap, StyledTodoItem } from './styled';
import { Checkbox, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteTodoAction, updateTodoAction } from '../../store/action-creators/todo';

type TodoItemProps = TodoItem & Omit<TodoItemsListProps, 'todoItems'>;

function Todo({ name, description, isDone, _id }: TodoItemProps) {
  const dispatch = useDispatch();

  const setTodoIsDone = useCallback(async () => {
    dispatch(updateTodoAction({ name, description, _id, isDone: true }));
  }, [name, description, _id, dispatch]);

  const handleDeleteTodo = useCallback(async () => {
    dispatch(deleteTodoAction(_id));
  }, [_id, dispatch]);

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
        <StyledDeleteBtn container item justifyContent="center" alignItems="center" onClick={ handleDeleteTodo }>
          <DeleteIcon/>
        </StyledDeleteBtn>
      </StyledDeleteBtnWrap>
    </StyledTodoItem>
  );
}

export default Todo;
