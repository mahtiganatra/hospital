import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

export default function DisableElevation8() {
  return (
    <Grid container spacing={20} justifyContent="center">
      {/* // <Button variant="contained" color="primary" disableElevation> */}
      {/* // Request an Appointment */}
      {/* // </Button> */}
      <Link to={process.env.PUBLIC_URL + '/Info'}>
        <Button variant="contained" color="primary" disableElevation>

          Request an Appointment

        </Button>
      </Link >
    </Grid>

  );
}
