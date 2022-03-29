import React from "react";
import Navigation from "@components/NavigationBar/NavigationBar";
import { Box, Typography } from "@mui/material";
import useStyle from "./style";

const Home = () => {
  const style = useStyle();
  return (
    <Box>
      <Navigation />
      <Box className={style.root}>
        <Typography variant="h2">Bienvenue sur LaWeb</Typography>
      </Box>
    </Box>
  );
};

export default Home;
