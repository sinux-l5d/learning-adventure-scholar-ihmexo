import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, IconButton, Stack, Grid } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import FormSeanceCard from './FormSeanceCard';

const SeanceCardStack = (props) => {
  //const seances = props.seances;
  const [seances, setSeances] = React.useState([
    { groupe: '', encadrant: '', dateDebut: new Date(), dateFin: new Date(), id: Date.now() },
  ]);

  const mettreAJourSeances = (seance) => {
    setSeances(seances.map((s) => (s.id === seance.id ? seance : s)));
  };

  console.log(seances);

  const ajouterSeance = () => {
    setSeances(
      seances.concat({
        groupe: '',
        encadrant: '',
        dateDebut: new Date(),
        dateFin: new Date(),
        id: Date.now(),
      }),
    );
  };

  const supprimerSeance = (id) => {
    if (seances.length > 1) {
      setSeances((seances) => seances.filter((seance) => seance.id !== id));
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
      {seances.map((seance, index) => (
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

//SeanceCardStack.propTypes = {};

export default SeanceCardStack;
