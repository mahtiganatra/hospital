import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';






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

export default function SeniorCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>

        

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h6" component="h2">
         Senior Citizen - Male
         

         
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* <DisableElevation/> */}
          Package Description
          

        </Typography>
        <Typography variant="body2" component="p">
          {/* <DisableElevation1/> */}
          Only males above the age of 60 years are 
eligible for this package.
    Early intervention helps in reducing the cost 
to a great extent.The package focuses on-
Ophthalmology.
General Routine Blood check up with 
Physician, Surgeon/Gynaecology.
ENT.
Dental Consultation.
It also offers gender specific tests like 
Prostate screening.

          </Typography>
          <Typography variant="h5" component="h2">
        ₹ 9000 /-

        
        

         
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
