import React from 'react';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



export default function DisableElevation2() {
  return (
    <Button variant="contained" color="primary" disableElevation>
        <FavoriteBorderIcon/>
     
     
    </Button>
  );
}