import React from 'react';
import Navigation from '@components/NavigationBar/NavigationBar';
import Exercices from '@components/ExercicesList/ExercicesList';
import { Box } from '@mui/material';

const ListeExercice = () => {
  return (
    <Box>
      <Navigation />
      <Exercices />
    </Box>
  );
};

export default ListeExercice;
