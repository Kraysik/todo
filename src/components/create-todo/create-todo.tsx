import React, { useEffect, useMemo, useState } from 'react';
import { TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledAddBtn, StyledCreateTodo, StyledCreateTodoWrap, StyledFabIconClose } from './styled';
import { TodoItemStructure } from '../todo-items-list/todo-items-list';
import { showCreateTodoForm } from '../../store/reducers/uiSlice';
import { useAppDispatch } from '../../hooks/redux';
import { useCreateTodo } from '../../hooks/useCreateTodo';

// Задержка анимации и таймаута вызова метода onClose в мс.
const transitionCloseDelay: number = 150;

const CreateTodo = () => {
  const createTodoM = useCreateTodo();
  const dispatch = useAppDispatch();

  const emptyTodo: TodoItemStructure = useMemo(() => ({ name: '', description: '', isDone: false }), []);
  const [todo, setTodo] = useState<TodoItemStructure>(emptyTodo);
  const [isActive, setIsActive] = useState<Boolean>(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const handleClose = () => {
    setIsActive(false);
    setTimeout(() => dispatch(showCreateTodoForm()), transitionCloseDelay);
  };

  const handleCreateTodo = () => {
    createTodoM.mutateAsync(todo);
    handleClose();
  };

  const handleNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, name: event.target.value });
  };
  const handleDescriptionChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, description: event.target.value });
  };

  return (
    <StyledCreateTodoWrap container justifyContent="center" alignItems="center" className={ isActive ? 'active' : '' }
                          transitionDelay={ transitionCloseDelay }>
      <StyledCreateTodo spacing={ 2 }>
        <StyledFabIconClose color="secondary" aria-label="close" size="medium" onClick={ handleClose }>
          <CloseIcon/>
        </StyledFabIconClose>

        <Typography variant="h4">Add a task</Typography>
        <TextField required label="What you need to do?" variant="standard" value={ todo.name }
                   onChange={ handleNameChanged }/>
        <TextField label="Add a description" variant="standard" value={ todo.description }
                   onChange={ handleDescriptionChanged }/>
        <StyledAddBtn variant="outlined" onClick={ handleCreateTodo } disabled={ !todo.name }>Create</StyledAddBtn>
      </StyledCreateTodo>
    </StyledCreateTodoWrap>
  );
};

export default CreateTodo;
