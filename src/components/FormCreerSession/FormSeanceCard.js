import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Box, Grid, TextField } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';

const FormSeanceCard = (props) => {
  const [valueDateDebut, setValueDateDebut] = React.useState();

  const handleChangeDateDebut = (newValue) => {
    setValueDateDebut(newValue);
  };

  return (
    <Paper sx={{ padding: '2em' }}>
      <Grid container columnSpacing={10} rowSpacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <GroupsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="groupe-seance"
              label="Groupe"
              variant="standard"
              sx={{ width: '100%' }}
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
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

FormSeanceCard.propTypes = {};

export default FormSeanceCard;
