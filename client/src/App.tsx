import React, { useCallback, useState } from 'react';
import { AppContext } from './context';
import { Button, Container, Fab, Grid, Stack, styled, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ActiveTodos from './components/active-todos/active-todos';
import CompletedTodos from './components/completed-todos/completed-todos';
import CreateTodo from './components/create-todo/create-todo';
import { TodoItem } from './components/todo-items-list/todo-items-list';
import { getAllTodo } from './api/todos';

const StyledApp = styled('div')`
  padding-top: clamp(${ ({ theme }) => theme.spacing(3) }, 6vw, ${ ({ theme }) => theme.spacing(10) });
  color: ${ ({ theme }) => theme.palette.text.primary };
`;
const StyledAppTitle = styled(Typography)`
  margin-bottom: ${ ({ theme }) => theme.spacing(5) };
`;

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [isTodosShowed, setIsTodosShowed] = useState<boolean>(false);

  const [isTodoFormShow, setIsTodoFormShow] = useState<boolean>(false);
  const [showUncompletedTodos, setShowUncompletedTodos] = useState<boolean>(true);

  const getTodoList = useCallback(async (query?: string) => {
    query = query !== undefined ? query : '';

    const { data } = await getAllTodo(query);
    setTodos(data);

    setIsTodosShowed(true);
  }, []);

  const removeTodoFromList = useCallback((todo: TodoItem) => {
    setTodos(todos.filter(t => t._id !== todo._id));
  }, [todos, setTodos]);

  const changeTodoFormVisibility = useCallback(() => {
    setIsTodoFormShow(!isTodoFormShow);
  }, [isTodoFormShow]);

  return (
    <AppContext.Provider value={{
      todos,
      setTodos,
      isTodosShowed,
      setIsTodosShowed,
      getTodos: getTodoList,
      removeTodoFromList
    }}>
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
    </AppContext.Provider>
  );
}

export default App;
