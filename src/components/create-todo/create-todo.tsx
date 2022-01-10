import React, { Dispatch, useCallback, useMemo, useState } from 'react';
import { TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledAddBtn, StyledCreateTodo, StyledCreateTodoWrap, StyledFabIconClose } from './styled';
import { TodoItem } from '../todo-items-list/todo-items-list';

interface CreateTodoProps {
  create: Dispatch<TodoItem>;
  isActive: boolean;
  setIsActive: () => void;
}

const CreateTodo = ({ create, isActive, setIsActive }: CreateTodoProps) => {
  const emptyTodo: TodoItem = useMemo(() => ({ name: '', description: '', isDone: false, id: 0 }), []);
  const [todo, setTodo] = useState<TodoItem>(emptyTodo);

  const createTodo = useCallback(() => {
    const newTodo = { ...todo, id: Date.now() };

    create(newTodo);
    setTodo(emptyTodo);
    setIsActive();
  }, [create, emptyTodo, todo, setIsActive]);

  const handleNameChanged = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, name: event.target.value });
  }, [todo]);

  const handleDescriptionChanged = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, description: event.target.value });
  }, [todo]);

  return (
    <StyledCreateTodoWrap container justifyContent="center" alignItems="center" className={ isActive ? 'active' : '' }>
      <StyledCreateTodo spacing={ 2 }>
        <StyledFabIconClose color="secondary" aria-label="close" size="medium" onClick={setIsActive}>
          <CloseIcon/>
        </StyledFabIconClose>

        <Typography variant="h4">Add a task</Typography>
        <TextField required label="What you need to do?" variant="standard" value={ todo.name }
                   onChange={ handleNameChanged }/>
        <TextField label="Add a description" variant="standard" value={ todo.description }
                   onChange={ handleDescriptionChanged }/>
        <StyledAddBtn variant="outlined" onClick={ createTodo } disabled={ !todo.name }>Create</StyledAddBtn>
      </StyledCreateTodo>
    </StyledCreateTodoWrap>
  );
};

export default CreateTodo;
