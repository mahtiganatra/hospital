import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';






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
    <Grid container spacing={-20} justifyContent="center">
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
            <Grid item xs={12} >
              Only males above the age of 60 years are
              eligible for this package.
            </Grid>

            <Grid item xs={24} >
              Early intervention helps in reducing the cost
              to a great extent.
            </Grid>

            <Grid item xs={12} >
              The package focuses on-
              Ophthalmology.
            </Grid>

            <Grid item xs={12} >
              General Routine Blood check up with
              Physician, Surgeon/Gynaecology.
              ENT.
            </Grid>

            <Grid item xs={12} >
              Dental Consultation.
            </Grid>

            <Grid item xs={12} >
              It also offers gender specific tests like
              Prostate screening.
            </Grid>


          </Typography>
          <Grid container spacing={-20} justifyContent="center">
            <Typography variant="h5" component="h2">
              ₹ 9000 /-







              <br />

              { }
            </Typography>
          </Grid>
        </CardContent>

        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
}
