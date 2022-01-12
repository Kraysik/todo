import { Grid, styled } from '@mui/material';

export const StyledTodoItem = styled(Grid)`
  padding: ${({theme}) => theme.spacing(1)};
  position: relative;
  width: 100%;
  border-radius: 4px;
  transition: background-color .15s ease;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  .name {
    font-size: 28px;
    font-weight: 500;
  }
  
  &:hover {
    background-color: ${({theme}) => theme.palette.info.main};
    .delete {
      opacity: 1;
    }
  }
`;

export const StyledDeleteBtnWrap = styled(Grid)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity .15s ease;
`;
export const StyledDeleteBtn = styled(Grid)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
