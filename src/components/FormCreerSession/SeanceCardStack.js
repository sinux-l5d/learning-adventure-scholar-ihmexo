import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, IconButton, Stack, Grid } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import FormSeanceCard from './FormSeanceCard';

/**
 * Composant qui affiche une liste de séances et permet à l'utilisateur d'ajouter ou de supprimer des séances
 * @param props - Les props qui sont passés au composant.
 * props.mettreAJourSessionToPost - La fonction qui permet de mettre à jour la session à envoyer au service exercice
 * props.sessionToPost - La session à envoyer au service exercice
 * @returns Un conteneur de grille avec un élément de grille pour chaque séance dans
 * sessionToPost.seances.
 */
const SeanceCardStack = (props) => {
  const mettreAJourSessionToPost = props.mettreAJourSessionToPost;
  const sessionToPost = props.sessionToPost;

  /**
   * Prend une séance en argument, puis il met à jour le tableau seances dans l'objet
   * sessionToPost avec le nouvel objet seance
   * @param seance - La séance que nous voulons mettre à jour
   */
  const mettreAJourSeances = (seance) => {
    mettreAJourSessionToPost(
      'seances',
      sessionToPost.seances.map((s) => (s.id === seance.id ? seance : s)),
    );
  };

  /**
   * Il ajoute une nouvelle seance à la liste des seances de sessionToPost
   */
  const ajouterSeance = () => {
    mettreAJourSessionToPost(
      'seances',
      sessionToPost.seances.concat({
        groupe: '',
        encadrant: '',
        dateDebut: new Date(),
        dateFin: new Date(),
        id: Date.now(),
      }),
    );
  };

  /**
   * Supprime une séance de la liste des seances de sessionToPost
   * @param id - l'id de la session à supprimer
   */
  const supprimerSeance = (id) => {
    // Il faut au minimum une séance pour une session
    if (sessionToPost.seances.length > 1) {
      mettreAJourSessionToPost(
        'seances',
        sessionToPost.seances.filter((seance) => seance.id !== id),
      );
    } else {
      window.alert('Il faut minimum une séance');
    }
  };

  // Le composant qui permet d'ajouter une séance quand on clique dessus
  const ajouterSeanceCard = (
    <IconButton onClick={ajouterSeance} sx={{ width: '100%', padding: '0' }}>
      <Paper sx={{ padding: '1em', width: '100%' }} elevation={3}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AddIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <Typography variant="button" display="block" gutterBottom>
            Ajouter une séance
          </Typography>
        </Box>
      </Paper>
    </IconButton>
  );

  return (
    <Grid container spacing={2}>
      {sessionToPost.seances.map((seance) => (
        <Grid item xs={12} key={seance.id}>
          <FormSeanceCard
            seance={seance}
            supprimerSeance={supprimerSeance}
            mettreAJourSeances={mettreAJourSeances}
          />
        </Grid>
      ))}
      <Grid item xs={12}>
        {ajouterSeanceCard}
      </Grid>
    </Grid>
  );
};

SeanceCardStack.propTypes = {
  mettreAJourSessionToPost: PropTypes.func.isRequired,
  sessionToPost: PropTypes.object.isRequired,
};

export default SeanceCardStack;
