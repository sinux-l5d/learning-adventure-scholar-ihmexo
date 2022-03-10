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
  //const element= document.getElementById(event.target)
  console.log(document.getElementById(id));
  element = document.getElementById(id);
  console.log(element.visibility);
  if (element.style.visibility != "hidden") {
    element.hidden = true;
    element.style.visibility = "hidden";
  } else {
    element.style.visibility = "visible";
  }
}

/*
 * Carte permettant d'afficher les donnees d'un exercice
 */
function ExerciceCard({ data }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {bull}
          {data.nom}
        </Typography>
        <div id={data._id + "-Theme"}>
          {bull}Themes:
          <ul visibility="hidden">
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
          id={data._id}
          size="small"
          onClick={function () {
            handleMoreInformation(data._id + "-listeinfo");
          }}
        >
          Afficher tous les champs
        </Button>
        <ul id={data._id + "-listeinfo"}>
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
  }),
};

export default ExerciceCard;
