import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      width: '0ch',
    },
  },
}));

export default function BasicTextFields1() {
  const classes = useStyles();

  return (
    <Grid container spacing={-8} justifyContent="center">
      <form className={classes.root} noValidate autoComplete="off">

        <TextField id="standard-basic" label="Testimonials" />
        {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      </form>
    </Grid>
  );
}
