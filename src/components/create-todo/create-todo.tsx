import React, { useCallback, useMemo, useState } from 'react';
import { TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledAddBtn, StyledCreateTodo, StyledCreateTodoWrap, StyledFabIconClose } from './styled';
import { TodoItemStructure } from '../todo-items-list/todo-items-list';
import { createTodo } from '../../api/todos';

interface CreateTodoProps {
  isActive: boolean;
  setIsActive: () => void;
  updateTodoList: () => void;
}

const CreateTodo = ({ isActive, setIsActive, updateTodoList }: CreateTodoProps) => {
  const emptyTodo: TodoItemStructure = useMemo(() => ({ name: '', description: '', isDone: false }), []);
  const [todo, setTodo] = useState<TodoItemStructure>(emptyTodo);

  const handleCreateTodo = useCallback(async () => {
    try {
      await createTodo(todo);
      await updateTodoList();

      setTodo(emptyTodo);
      setIsActive();
    } catch (error) {
      console.log('Create Todo error', error);
    }
  }, [emptyTodo, todo, setIsActive, updateTodoList]);

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
        <StyledAddBtn variant="outlined" onClick={ handleCreateTodo } disabled={ !todo.name }>Create</StyledAddBtn>
      </StyledCreateTodo>
    </StyledCreateTodoWrap>
  );
};

export default CreateTodo;
