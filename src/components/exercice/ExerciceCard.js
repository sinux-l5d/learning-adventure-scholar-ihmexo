import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes, { element } from "prop-types";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

//
function handleMoreInformation(id) {
  element = document.getElementById(id);
  if (element.style.visibility == "hidden") {
    // Contenu caché, le montrer
    element.style.visibility = "visible";
    element.style.height = "auto";
    element.style.width = "auto"; // prendre l'espace
  } else {
    // Contenu visible, le cacher
    element.style.visibility = "hidden";
    element.style.height = "0"; // libérer l'espace
    element.style.width = "0"; // libérer l'espace
  }
}

/*
 * Carte permettant d'afficher les donnees d'un exercice
 */
function ExerciceCard({ data }) {
  const cardstyle = {
    visibility: "hidden",
    height: "0",
    width: "0", // libérer l'espace
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {bull}
          {data.nom}
        </Typography>
        <div id={data._id + "-Theme"}>
          {bull}Themes:
          <ul>
            {data.theme.map((element) => {
              return <li key={element}>{element}</li>;
            })}
          </ul>
        </div>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {bull}langage: {data.langage}
        </Typography>
        <Typography variant="body2">
          {bull}difficulté: {data.difficulte}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={function () {
            handleMoreInformation(data._id + "-listeinfo");
          }}
        >
          Afficher tous les champs
        </Button>
        <ul id={data._id + "-listeinfo"} style={cardstyle}>
          <li>{data.aides}</li>
          <li>{data.template}</li>
          <li>{data.auteurs}</li>
          <li>{data.enonce}</li>
          <li>{data.dataset}</li>
        </ul>
      </CardActions>
    </Card>
  );
}

/*
 * Types des props passer en parametre au compoment
 */
ExerciceCard.PropTypes = {
  data: PropTypes.shape({
    nom: PropTypes.string,
    theme: PropTypes.arrayOf(PropTypes.string),
    langage: PropTypes.string,
    difficulte: PropTypes.number,
    aides: PropTypes.string,
    template: PropTypes.string,
    auteurs: PropTypes.string,
    enonce: PropTypes.string,
    dataset: PropTypes.arrayOf(PropTypes.string),
    _id: PropTypes.number,
  }),
};

export default ExerciceCard;
