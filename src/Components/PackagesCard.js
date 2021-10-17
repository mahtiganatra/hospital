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
// import SimpleList from './HomeList';
import DisableElevation6 from './Male';
import DisableElevation7 from './Female';
import SimpleListp from './PackageList';
import SimpleListq from './PackageList2'
import SimpleListr from './PackageList3';
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

export default function PackagesCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <Grid container spacing={-20} justifyContent="center">
        <CardContent>




          <Typography className={classes.title} color="textSecondary" gutterBottom>

          </Typography>
          <Typography variant="h6" component="h2">
            Packages

            <Grid container spacing={-20} justifyContent="center">
              <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
                <DisableElevation6 />
              </Grid>

              <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
                <DisableElevation7 />
              </Grid>
            </Grid>


          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {/* <DisableElevation/> */}


          </Typography>
          <Typography variant="body2" component="p">
            {/* <DisableElevation1/> */}

          </Typography>
          <Typography variant="body6" component="p">


            <Grid container spacing={-20} justifyContent="center">
              <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
                <SimpleListp />
                <SimpleListq />
                <SimpleListr />
              </Grid>
            </Grid>






            <br />

            { }
          </Typography>
        </CardContent>

        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Grid>
    </Card >
  );
}
