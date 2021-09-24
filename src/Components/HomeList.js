import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Ambulance from '../Assets/Ambulance.svg'
import Appointment from '../Assets/Appointment.svg'
import HealthCareic from '../Assets/HealthCareic.svg'
import Finances from '../Assets/Finances.svg'
import { Link, Router } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            {/* <AirportShuttleIcon/> */}
            <img src={Ambulance} className="Ambulance" alt="Ambulance" />

          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {/* <CalendarTodayIcon/> */}
            <img src={Appointment} className="Appointment" alt="Appointment" />
          </ListItemIcon>
          {/* <ListItemText primary="Appointment" /> */}
        </ListItem>
      </List>
      {/* <Divider /> */}
      <List component="nav" aria-label="main mailbox folders">

        {/* <ListItem button> */}
          {/* <FavoriteBorderIcon/> */}
          {/* <img src={HealthCareic} className="HealthCareic" alt="HealthCareic" /> */}
          {/* <ListItemText primary="Health Care" /> */}
          <Link to={process.env.PUBLIC_URL + '/HealthCare'}>
            <ListItem button> <img src={HealthCareic} className="HealthCareic" alt="HealthCareic" /></ListItem>
          </Link>


        {/* </ListItem> */}
        <ListItemLink href="#simple-list">
          {/* <AttachMoney/> */}
          <img src={Finances} className="Finances" alt="Finances" />
          {/* <ListItemText primary="Finance" /> */}
        </ListItemLink>
      </List>
    </div>
  );
}
