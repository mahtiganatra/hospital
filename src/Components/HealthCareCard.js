import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DisableElevation from './Button1';
import DisableElevation1 from './Appointment';
import DisableElevation2 from './HealthCare';
import SimpleList from './HomeList';
import HealthCareList from './HealthcareList';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function HealthCareCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
          Health
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* <DisableElevation/> */}
          

        </Typography>
        <Typography variant="body2" component="p">
          {/* <DisableElevation1/> */}

          </Typography>
        <Typography variant="body6" component="p">  

        <HealthCareList/>

         
          <br />
         
          {}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
