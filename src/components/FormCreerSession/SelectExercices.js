import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PropTypes from 'prop-types';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

/**
 * Composant qui permet de selectioner les exercices de la session
 * @param props - Les props qui sont passés au composant.
 * props.mettreAJourSessionToPost - La fonction qui permet de mettre à jour la session à envoyer au service exercice
 */
const SelectExercices = (props) => {
  // On récupere les exercices du service exercice
  const [exercices, setExercices] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_SRVEXO + '/exercices').then((res) => {
      setExercices(
        res.data.exercices.map((exo) => {
          return { id: exo.id, nom: exo.nom };
        }),
      );
    });
  }, []);

  // Fonction qui permet de mettre à jour la sessionToPost avec les exercices sélectionnés
  const mettreAJourSessionToPost = props.mettreAJourSessionToPost;

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={exercices}
      disableCloseOnSelect
      getOptionLabel={(option) => option.nom}
      onChange={(_, value) => {
        // On récupère les id des exercices sélectionnés
        const selectedExercices = value.map((exo) => exo.id);
        // On met à jour la sessionToPost avec les exercices sélectionnés
        mettreAJourSessionToPost('exercices', selectedExercices);
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.nom}
        </li>
      )}
      style={{ width: '100%' }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Exercices"
          placeholder="Choissiez les exercices pour la session"
        />
      )}
    />
  );
};

SelectExercices.propTypes = {
  mettreAJourSessionToPost: PropTypes.func.isRequired,
};

export default SelectExercices;
