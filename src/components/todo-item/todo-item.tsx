import React from 'react';
import { TodoItem } from '../todo-items-list/todo-items-list';
import { StyledDeleteBtn, StyledDeleteBtnWrap, StyledTodoItem } from './styled';
import { Checkbox, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { todoApi } from '../../services/todoService';


function Todo(todo: TodoItem) {
  const [updateTodo] = todoApi.useUpdateMutation();
  const [deleteTodo] = todoApi.useDeleteMutation();

  const handleUpdate = () => {
    updateTodo({ ...todo, isDone: true });
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo._id);
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
