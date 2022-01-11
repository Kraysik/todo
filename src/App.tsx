import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Container, Fab, Grid, Stack, styled, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TodoItemsList, { TodoItem } from './components/todo-items-list/todo-items-list';
import CreateTodo from './components/create-todo/create-todo';
import { getAllTodo } from './api/todos';

const StyledApp = styled('div')`
  padding-top: clamp(${ ({ theme }) => theme.spacing(3) }, 6vw, ${ ({ theme }) => theme.spacing(10) });
  color: ${ ({ theme }) => theme.palette.text.primary };
`;
const StyledAppTitle = styled(Typography)`
  margin-bottom: ${ ({ theme }) => theme.spacing(5) };
`;
const StyledCompletedTodos = styled('div')`
  color: ${ ({ theme }) => theme.palette.text.secondary };
`;

function App() {
  const [isTodoFormShow, setIsTodoFormShow] = useState<boolean>(false);
  const [showUncompletedTodos, setShowUncompletedTodos] = useState<boolean>(true);
  const [todos, setTodos] = useState<Array<TodoItem>>([]);
  const [completedTodos, setCompletedTodos] = useState<Array<TodoItem>>([]);

  const getTodoList = async () => {
    const { data } = await getAllTodo();
    console.log(data);
    setTodos(data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const setTodoIsDone = useCallback((todo) => {
    setTodos(todos.filter(t => t._id !== todo._id));
  }, [todos]);

  const renderActiveTodos = useMemo(() => (
    !todos.length
      ? <Typography variant="h4"> You have not any active todos :(</Typography>
      : <TodoItemsList setSingleTodoIsDone={ setTodoIsDone } todoItems={ todos }/>
  ), [setTodoIsDone, todos]);
  const renderCompletedTodos = useMemo(() => (
    !completedTodos.length
      ? <Typography variant="h4"> You have not any completed todos :(</Typography>
      : <StyledCompletedTodos><TodoItemsList todoItems={ completedTodos }/></StyledCompletedTodos>
  ), [completedTodos]);

  const changeTodoFormVisibility = useCallback(() => {
    setIsTodoFormShow(!isTodoFormShow);
  }, [isTodoFormShow]);

  return (
    <StyledApp className="app">
      <CreateTodo isActive={ isTodoFormShow } setIsActive={ changeTodoFormVisibility } updateTodoList={getTodoList}/>

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

        { showUncompletedTodos && renderActiveTodos }
        { !showUncompletedTodos && renderCompletedTodos }

      </Container>
    </StyledApp>
  );
}

export default App;
