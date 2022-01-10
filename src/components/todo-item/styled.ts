import { Grid, styled } from '@mui/material';

export const StyledTodoItem = styled(Grid)`
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  .name {
    font-size: 28px;
    font-weight: 500;
  }
`;
