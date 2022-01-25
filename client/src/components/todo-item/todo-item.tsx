import React from 'react';
import { TodoItem } from '../todo-items-list/todo-items-list';
import { StyledDeleteBtn, StyledDeleteBtnWrap, StyledTodoItem } from './styled';
import { Checkbox, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteTodo } from '../../hooks/useDeleteTodo';
import { useUpdateTodo } from '../../hooks/useUpdateTodo';


function Todo(todo: TodoItem) {
  const deleteTodoM = useDeleteTodo();
  const updateTodoM = useUpdateTodo();

  const handleUpdate = () => {
    updateTodoM.mutateAsync({ ...todo, isDone: true });
  };

  const handleDeleteTodo = () => {
    deleteTodoM.mutateAsync(todo._id);
  };

  return (
    <StyledTodoItem container>
      { !todo.isDone && (
        <Grid item className="check">
          <Checkbox onChange={ handleUpdate }/>
        </Grid>
      ) }
      <Grid item>
        <div className="name">{ todo.name }</div>
        { todo.description ?? <div className="description">{ todo.description }</div> }
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
