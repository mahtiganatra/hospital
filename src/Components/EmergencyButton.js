import React from 'react';
import Button from '@material-ui/core/Button';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';


export default function DisableElevation3() {
  return (
    <Button variant="contained" color="secondary" disableElevation>
      
      <NotificationsActiveIcon/>
    </Button>
  );
}
