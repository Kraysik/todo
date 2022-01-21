import React from 'react';
import { Container } from '@mui/material';
import CreateTodo from './components/create-todo/create-todo';
import { StyledApp, StyledAppTitle } from './appStyled';
import TodoContainer from './components/todo-container/todo-container';
import ActionButtons from './components/action-buttons/action-buttons';
import { useAppSelector } from './hooks/redux';

/* TODO
*   Вынес форму в отдельный компонент со своим состоянием, но все ровно
*   Апп ререндерится, когда она открывается...
*/
const CreateTodoForm = () => {
  const { isCreate } = useAppSelector(state => state.ui);

  return (
    <>
      { isCreate && <CreateTodo/> }
    </>
  );
};

function App() {
  return (
    <StyledApp className="app">
      <CreateTodoForm/>
      <Container maxWidth="lg">
        <StyledAppTitle variant="h3">Simple design-less "todo" app</StyledAppTitle>

        <ActionButtons/>

        <TodoContainer/>

      </Container>
    </StyledApp>
  );
}

export default App;
