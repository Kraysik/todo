import React, { useCallback, useState } from 'react';
import { Button, Container, Fab, Grid, Stack, styled, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ActiveTodos from './components/active-todos/active-todos';
import CompletedTodos from './components/completed-todos/completed-todos';
import CreateTodo from './components/create-todo/create-todo';

const StyledApp = styled('div')`
  padding-top: clamp(${ ({ theme }) => theme.spacing(3) }, 6vw, ${ ({ theme }) => theme.spacing(10) });
  color: ${ ({ theme }) => theme.palette.text.primary };
`;
const StyledAppTitle = styled(Typography)`
  margin-bottom: ${ ({ theme }) => theme.spacing(5) };
`;

function App() {
  const [isTodoFormShow, setIsTodoFormShow] = useState<boolean>(false);
  const [showUncompletedTodos, setShowUncompletedTodos] = useState<boolean>(true);

  const changeTodoFormVisibility = useCallback(() => {
    setIsTodoFormShow(!isTodoFormShow);
  }, [isTodoFormShow]);

  return (
    <StyledApp className="app">
      { isTodoFormShow
        ? <CreateTodo onClose={changeTodoFormVisibility}/>
        : null }


      <Container maxWidth="lg">
        <StyledAppTitle variant="h3">Simple design-less "todo" app</StyledAppTitle>

        <Grid container justifyContent="space-between" alignItems="center" mb={ 3 }>
          <Stack direction="row" spacing={ 2 }>
            <Button variant="contained" onClick={ useCallback(() => setShowUncompletedTodos(true), []) }
                    disabled={ showUncompletedTodos }>Active</Button>
            <Button variant="contained"
                    onClick={ useCallback(() => setShowUncompletedTodos(false), []) }
                    disabled={ !showUncompletedTodos }
            >Completed</Button>
          </Stack>
          <Fab size="medium" color="secondary" aria-label="add" onClick={ changeTodoFormVisibility }>
            <AddIcon/>
          </Fab>
        </Grid>

        { showUncompletedTodos && <ActiveTodos/> }
        { !showUncompletedTodos && <CompletedTodos/> }

      </Container>
    </StyledApp>
  );
}

export default App;
