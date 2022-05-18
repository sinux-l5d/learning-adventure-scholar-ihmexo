import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, IconButton, Stack, Grid } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import FormSeanceCard from './FormSeanceCard';

const SeanceCardStack = (props) => {
  const mettreAJourSessionToPost = props.mettreAJourSessionToPost;
  const sessionToPost = props.sessionToPost;

  const mettreAJourSeances = (seance) => {
    mettreAJourSessionToPost(
      'seances',
      sessionToPost.seances.map((s) => (s.id === seance.id ? seance : s)),
    );
  };

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

  const supprimerSeance = (id) => {
    if (sessionToPost.seances.length > 1) {
      mettreAJourSessionToPost(
        'seances',
        sessionToPost.seances.filter((seance) => seance.id !== id),
      );
    } else {
      window.alert('Il faut minimum une séance');
    }
  };

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
      {sessionToPost.seances.map((seance, index) => (
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
