import { styled, Typography } from '@mui/material';

export const StyledApp = styled('div')`
  padding-top: clamp(${ ({ theme }) => theme.spacing(3) }, 6vw, ${ ({ theme }) => theme.spacing(10) });
  color: ${ ({ theme }) => theme.palette.text.primary };
`;
export const StyledAppTitle = styled(Typography)`
  margin-bottom: ${ ({ theme }) => theme.spacing(5) };
`;
