import React from "react";
import Navigation from "../components/Navigation";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Navigation />
      <Box
        sx={{
          display: "flex",
          "justify-content": "center",
          padding: "50px",
        }}
      >
        <Typography variant="h2">Bienvenue sur LaWeb</Typography>
      </Box>
    </Box>
  );
};

export default Home;
