import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Box, TextField } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';

const FormSeanceCard = (props) => {
  const [valueDateDebut, setValueDateDebut] = React.useState();

  const handleChangeDateDebut = (newValue) => {
    setValueDateDebut(newValue);
  };

  return (
    <Paper sx={{ padding: '2em' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <GroupsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="groupe-seance"
          label="Groupe"
          variant="standard"
          sx={{ width: '48%', marginRight: '4%' }}
        />

        <SchoolIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="encadrant-seance"
          label="Encadrant"
          variant="standard"
          sx={{ width: '48%' }}
        />
      </Box>
    </Paper>
  );
};

FormSeanceCard.propTypes = {};

export default FormSeanceCard;
