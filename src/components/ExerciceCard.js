import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function ExerciceCard({data}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5"  gutterBottom>
        {bull}{data.nom}
        </Typography>
        <Typography  color="text.secondary" component="div">
          {bull}Themes:
          {data.theme
            .map((element) => {
                return(<ul>
                    <li>{element}</li>
                </ul>)
            })
          }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {bull}langage: {data.langage}
        </Typography>
        <Typography variant="body2">
        {bull}difficulté: {data.difficulte}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default ExerciceCard;