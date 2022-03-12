import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography, ClickAwayListener } from "@mui/material";
import PropTypes, { element } from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import "../../css/ExerciceCard.scss";
import ExerciceInfo from "./ExerciceInfo";

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
        {/* <Backdrop open={openInfo} onClick={fermerInfo} sx={{ zIndex: 10 }}> */}
        <ClickAwayListener onClickAway={fermerInfo}>
          <Box>
            <Button onClick={alternerInfo}>Afficher tous les champs</Button>
            {/*---------------------------------------------- Passer ca dans un nouveau components --------------------------------------- */}
            {openInfo ? <ExerciceInfo data={data} /> : null}
            {/*---------------------------------------------- Passer ca dans un nouveau components --------------------------------------- */}
            {/* </Backdrop> */}
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

export default ExerciceCard;
