import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography, ClickAwayListener } from "@mui/material";
import PropTypes, { element } from "prop-types";
import ExerciceInfo from "@components/ExerciceCard/ExerciceInfo/ExerciceInfo";

const bull = (
  <Box component="span" sx={{ display: "inline-block", mx: "2px" }}>
    •
  </Box>
);

/*
 * Carte permettant d'afficher les donnees d'un exercice
 */
function ExerciceCard({ data }) {
  const [openInfo, setOpenInfo] = React.useState(false);
  const fermerInfo = () => {
    setOpenInfo(false);
  };
  const alternerInfo = () => {
    setOpenInfo(!openInfo);
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {data.nom}
        </Typography>
        <div id={data._id + "-Theme"}>
          {bull}Themes:
          <ul>
            {data.themes.map((element) => {
              return <li key={element}>{element}</li>;
            })}
          </ul>
        </div>
        <Typography sx={{ mb: 1.5 }}>
          {bull}langage: {data.langage}
        </Typography>
        <Typography variant="body2" data-testid="difficulte">
          {bull}difficulté: {data.difficulte}
        </Typography>
      </CardContent>
      <CardActions>
        <ClickAwayListener onClickAway={fermerInfo}>
          <Box>
            <Button onClick={alternerInfo} data-testid="button-info">
              Afficher tous les champs
            </Button>
            {openInfo ? <ExerciceInfo data={data} /> : null}
          </Box>
        </ClickAwayListener>
      </CardActions>
    </Card>
  );
}

/*
 * Types des props passer en parametre au compoment
 * Attention: mettre les bons types sur les props
 */
ExerciceCard.propTypes = {
  data: PropTypes.shape({
    nom: PropTypes.string,
    themes: PropTypes.arrayOf(PropTypes.string),
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

export default ExerciceCard;
