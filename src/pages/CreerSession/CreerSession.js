import React from 'react';
import Navigation from '@components/NavigationBar/NavigationBar';
import { Box } from '@mui/material';
import FormCreerSession from '@components/FormCreerSession/FormCreerSession';

const CreerExercice = () => {
  return (
    <Box>
      <Navigation />
      <FormCreerSession />
    </Box>
  );
};

export default CreerExercice;
