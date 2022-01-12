import React from 'react';
import { CircularProgress, Grid } from '@mui/material';

const Spinner = () => {
  return (
    <Grid container justifyContent="center">
      <CircularProgress />
    </Grid>
  );
};

export default Spinner;
