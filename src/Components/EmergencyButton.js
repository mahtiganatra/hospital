import React from 'react';
import Button from '@material-ui/core/Button';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Emergency from '../Assets/Emergency.svg'

export default function DisableElevation4() {
  return (
    <Button variant="contained" color="secondary" disableElevation>
      
      <NotificationsActiveIcon/>
      {/* <img src={Emergency} className="Emergency" alt="Emergency" /> */}

    </Button>
  );
}
