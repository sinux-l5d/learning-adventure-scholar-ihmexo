import React from "react";
import Navigation from "../components/Navigation";
import Exercices from "../components/Exercices";
import { Box } from "@mui/material";
const ListeExercice = () => {
  return (
    <Box>
      <Navigation />
      <Exercices />
    </Box>
  );
};

export default ListeExercice;
