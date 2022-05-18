import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Box, Grid, TextField, IconButton } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import DeleteIcon from '@mui/icons-material/Delete';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const FormSeanceCard = (props) => {
  const seance = props.seance;
  const supprimerSeance = props.supprimerSeance;
  const mettreAJourSeances = props.mettreAJourSeances;

  const modifierProperty = (property, value) => {
    mettreAJourSeances({ ...seance, [property]: value });
  };

  return (
    <Paper sx={{ padding: '2em', position: 'relative' }} elevation={3}>
      <IconButton
        onClick={() => {
          supprimerSeance(seance.id);
        }}
        sx={{ position: 'absolute', top: '1rem', right: '1rem', 'z-index': '2' }}
      >
        <DeleteIcon />
      </IconButton>
      <Grid container columnSpacing={10} rowSpacing={4}>
        <Grid item md={6} sm={12} xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <GroupsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="groupe-seance"
              label="Groupe"
              variant="standard"
              sx={{ width: '100%' }}
              onChange={(e) => {
                modifierProperty('groupe', e.target.value);
              }}
            />
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SchoolIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="encadrant-seance"
              label="Encadrant"
              variant="standard"
              sx={{ width: '100%' }}
              onChange={(e) => {
                modifierProperty('encadrant', e.target.value);
              }}
            />
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <DateTimePicker
            label="Date du début de la séance"
            value={seance.dateDebut}
            onChange={(date) => {
              modifierProperty('dateDebut', date);
            }}
            renderInput={(params) => <TextField sx={{ width: '100%' }} {...params} />}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <DateTimePicker
            label="Date de fin de la séance"
            value={seance.dateFin}
            onChange={(date) => {
              modifierProperty('dateFin', date);
            }}
            renderInput={(params) => <TextField sx={{ width: '100%' }} {...params} />}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

FormSeanceCard.propTypes = {
  seance: PropTypes.object.isRequired,
  supprimerSeance: PropTypes.func.isRequired,
  mettreAJourSeances: PropTypes.func.isRequired,
};

export default FormSeanceCard;
