import React from "react";
import PropTypes from "prop-types";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import "../../css/ExerciceCard.scss";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import { ContentCutOutlined } from "@mui/icons-material";

/*
 * Component afficher au click sur le boutton de l'ExerciceCard
 * Il permet d'afficher toutes les infos d'un exo
 * @TODO : faire du css sur l'extention du code l. 60
 */
const ExerciceInfo = ({ data }) => {
  console.log(data.aides.length);
  return (
    <Card
      sx={{
        maxWidth: "mx",
      }}
    >
      {data.aides.length != 0 ? (
        <>
          <CardContent>
            <Typography variant="h5">aides :</Typography>
            {data.aides}
          </CardContent>
          <Divider />
        </>
      ) : null}
      {data.auteurs.lenght != 0 ? (
        <>
          <CardContent>
            <Typography variant="h5">auteurs :</Typography>
            {data.auteurs}
          </CardContent>
          <Divider />
        </>
      ) : null}
      {data.enonce != undefined ? (
        <>
          <CardContent>
            <Typography variant="h5">enonce :</Typography>
            {data.enonce}
          </CardContent>
          <Divider />
        </>
      ) : null}

      {data.dataset.length != 0 ? (
        <>
          <CardContent>
            <Typography variant="h5">dataset :</Typography>

            {data.dataset}
          </CardContent>
          <Divider />
        </>
      ) : null}

      {/* petit problème avec les balises de code elle casse tout le css du site */}
      {/* {data.template != undefined && (
        <CardContent>
          <Typography variant="h5">template :</Typography>

          <SyntaxHighlighter language="c">{data.template}</SyntaxHighlighter>
        </CardContent>
      )} */}
    </Card>
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
