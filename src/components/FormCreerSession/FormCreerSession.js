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
  Button,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SelectExercices from '@components/FormCreerSession/SelectExercices';

import SeanceCardStack from './SeanceCardStack';
import axios from 'axios';

/**
 * Créé un formulaire pour créer une session
 * @returns Le formulaire pour créer une session .
 */
const FormCreerSession = () => {
  // On initialise la session à envoyer au service exercice pour créer une session
  const [sessionToPost, setSessionToPost] = React.useState({
    strategie: '',
    nom: '',
    auteur: '',
    seances: [
      { groupe: '', encadrant: '', dateDebut: new Date(), dateFin: new Date(), id: Date.now() },
    ],
    exercices: [],
  });

  /**
   * Prend une propriété d'une session et une valeur, et met à jour l'objet sessionToPost avec la nouvelle valeur
   * @param property - La propriété de l'objet sessionToPost que vous souhaitez mettre à jour
   * @param value - La valeur du champ de saisie
   */
  const mettreAJourSessionToPost = (property, value) => {
    setSessionToPost({ ...sessionToPost, [property]: value });
  };

  /**
   * Envoie la session au service exercice pour qu'elle soit ajouté à la bdd
   */
  const envoieSession = () => {
    // On enleve les id des seances dans la session car elle ne sont pas utilisées par le service exercice
    sessionToPost.seances = sessionToPost.seances.map((seance) => {
      delete seance.id;
      return seance;
    });

    axios.post(process.env.REACT_APP_SRVEXO + '/sessions', sessionToPost).then((res) => {
      if (res.status === 200) {
        window.alert('Session créée avec succès');
      } else {
        window.alert(
          'Erreur lors de la création de la session :' + res.data.error + ' | STATUS ' + res.status,
        );
      }
    });
  };

  return (
    <Container>
      <h1>Créer une session</h1>
      <Grid container spacing={2} sx={{ marginBottom: '1em' }}>
        <Grid item md={4} sm={12} xs={12}>
          <h2>Infos session</h2>
          <FormControl>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '1em' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="auteur-session"
                label="Auteur"
                variant="standard"
                value={sessionToPost.auteur}
                onChange={(e) => {
                  mettreAJourSessionToPost('auteur', e.target.value);
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '1em' }}>
              <DriveFileRenameOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="nom-session"
                label="Nom de la session"
                variant="standard"
                value={sessionToPost.nom}
                onChange={(e) => {
                  mettreAJourSessionToPost('nom', e.target.value);
                }}
              />
            </Box>
            <FormControl sx={{ marginTop: '2em', minWidth: 80 }}>
              <InputLabel id="strategie-label">Stratégie</InputLabel>
              <Select
                labelId="strategie-label"
                id="strategie-select"
                value={sessionToPost.strategie}
                onChange={(e) => {
                  mettreAJourSessionToPost('strategie', e.target.value);
                }}
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
          <SelectExercices mettreAJourSessionToPost={mettreAJourSessionToPost} />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <h2>Séances</h2>
          <SeanceCardStack
            mettreAJourSessionToPost={mettreAJourSessionToPost}
            sessionToPost={sessionToPost}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => {
              envoieSession();
            }}
          >
            Créer la session !
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FormCreerSession;
