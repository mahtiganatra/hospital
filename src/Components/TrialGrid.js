import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      
        

        <Grid item  md={6} xs={12}> 
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item md={4} xs={12}> 
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
