import React from 'react';
import {
  FormControl,
  Box,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Container,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SelectExercices from '@components/FormCreerSession/SelectExercices';
import FormSeanceCard from '@components/FormCreerSession/FormSeanceCard';

import PropTypes from 'prop-types';

const FormCreerSession = (props) => {
  const [strategie, setStrategie] = React.useState('');
  const [exercices, setSelected] = React.useState([]);
  console.log(exercices);

  const handleChange = (event) => {
    setStrategie(event.target.value);
  };

  return (
    <Container>
      <h1>Créer une session</h1>
      <Grid container spacing={2}>
        <Grid item md={4} sm={12} xs={12}>
          <h2>Infos session</h2>
          <FormControl>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '1em' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="auteur-session" label="Auteur" variant="standard" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '1em' }}>
              <DriveFileRenameOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="nom-session" label="Nom de la session" variant="standard" />
            </Box>
            <FormControl sx={{ marginTop: '2em', minWidth: 80 }}>
              <InputLabel id="strategie-label">Stratégie</InputLabel>
              <Select
                labelId="strategie-label"
                id="strategie-select"
                value={strategie}
                onChange={handleChange}
                autoWidth
                label="Strategie"
              >
                <MenuItem value={'lineaire'}>Linéaire</MenuItem>
              </Select>
            </FormControl>
          </FormControl>
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          <h2>Exercices</h2>
          <SelectExercices setSelected={setSelected} />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <h2>Séances</h2>
          <FormSeanceCard />
        </Grid>
      </Grid>
    </Container>
  );
};

FormCreerSession.propTypes = {};

export default FormCreerSession;
