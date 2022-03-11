import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import PropTypes, { element } from "prop-types";

/*
 * Component afficher au click sur le boutton de l'ExerciceCard
 * Il permet d'afficher toutes les infos d'un exo
 */
const ExerciceInfo = ({ data }) => {
  return (
    <Container maxWidth="sm" sx={{ bgcolor: "#b4d69c" }}>
      <List>
        <ListItem>
          <ListItemText primary={data.aides} />
          <ListItemText primary={data.template} />
          <ListItemText primary={data.auteurs} />
          <ListItemText primary={data.enonce} />
          <ListItemText primary={data.dataset} />
        </ListItem>
      </List>
    </Container>
  );
};

/*
 * Types des props passer en parametre au compoment
 * Attention: mettre les bons types sur les props
 */
ExerciceInfo.propTypes = {
  data: PropTypes.shape({
    nom: PropTypes.string,
    theme: PropTypes.arrayOf(PropTypes.string),
    langage: PropTypes.string,
    difficulte: PropTypes.number,
    aides: PropTypes.arrayOf(PropTypes.string),
    template: PropTypes.string,
    auteurs: PropTypes.arrayOf(PropTypes.string),
    enonce: PropTypes.string,
    dataset: PropTypes.arrayOf(PropTypes.string),
    _id: PropTypes.string,
  }),
};

export default ExerciceInfo;
