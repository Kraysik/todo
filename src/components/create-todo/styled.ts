import { Button, Fab, Grid, Stack, styled } from '@mui/material';

export const StyledCreateTodoWrap = styled(Grid)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  opacity: 0;
  transition: opacity .15s ease;
  pointer-events: none;
  z-index: 99;
  
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;

export const StyledFabIconClose = styled(Fab)`
  position: absolute;
  right: 0;
  top: -50px;
`;

export const StyledCreateTodo = styled(Stack)`
  position: relative;
  width: min(90vw, 600px);
  margin: 0 auto;
`;

export const StyledAddBtn = styled(Button)`
  width: fit-content;
  margin-left: 100%;
  margin-right: 0;
`;
