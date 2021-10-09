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

export default function BasicTextFields2() {
  const classes = useStyles();

  return (
    <Grid container spacing={20} justifyContent="center">
      <form className={classes.root} noValidate autoComplete="off">
        <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
          <TextField id="standard-basic" label="Social Initiatives" />
          {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        </Grid>
      </form>
    </Grid>
  );
}
