import React from 'react';
import Button from '@material-ui/core/Button';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';



export default function DisableElevation1() {
  return (
    <Button variant="contained" color="primary" disableElevation>
      
     <AttachMoneyIcon/> 
    </Button>
  );
}