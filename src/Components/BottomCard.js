import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SocialM from './SocialMedia';

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

export default function OutlinedCard1() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <Card className={classes.root} variant="outlined">
      <Grid container spacing={-8} justifyContent="center">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>


          </Typography>
          <Grid item xs={12} >
            <Typography variant="h5" component="h2">
              Lilavati Hospital
            </Typography>
          </Grid>
          <Typography className={classes.pos} color="textSecondary">
            More than healthcare, Human Care
          </Typography>
          <Grid item xs={12}>
            <Typography variant="body2" component="p">
              Ambulance
              <Grid item xs={12}>
                Convenience and Facilities
              </Grid>

              <Grid item xs={12}>
                Media and press Release
              </Grid>

              <Grid item xs={12}>
                Social Initiatives
              </Grid>

              <Grid item xs={12}>
                Floor Directory
              </Grid>

              <Grid item xs={12}>
                Photo Gallery
              </Grid>

              <Grid item xs={12}>
                Statutory Compliance
              </Grid>

              <Grid item xs={12}>
                E Tender
              </Grid>
              <SocialM />

              <br />
              { }
            </Typography>
          </Grid>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Grid>
    </Card>

  );
}
