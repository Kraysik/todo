import React from 'react';
import { Button, Fab, Grid, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeCurrentTodoComponent, showCreateTodoForm } from '../../store/reducers/uiSlice';

const ActionButtons = () => {
  const {isUncompletedTodos} = useAppSelector(state => state.ui);
  const dispatch = useAppDispatch();

  const handleChangeTodoComponent = () => {
    dispatch(changeCurrentTodoComponent())
  }
  const handleChangeCreateFormVisibility = () => {
    dispatch(showCreateTodoForm())
  }

  return (
    <Grid container justifyContent="space-between" alignItems="center" mb={ 3 }>
      <Stack direction="row" spacing={ 2 }>
        <Button variant="contained" onClick={handleChangeTodoComponent}
                disabled={ isUncompletedTodos }>Active</Button>
        <Button variant="contained"
                onClick={handleChangeTodoComponent}
                disabled={ !isUncompletedTodos }
        >Completed</Button>
      </Stack>
      <Fab size="medium" color="secondary" aria-label="add" onClick={handleChangeCreateFormVisibility}>
        <AddIcon/>
      </Fab>
    </Grid>
  );
};

export default ActionButtons;
