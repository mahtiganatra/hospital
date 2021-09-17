import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Social Initiatives" />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    </form>
  );
}
