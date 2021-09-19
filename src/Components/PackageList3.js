import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
// import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import AttachMoney from '@material-ui/icons/AttachMoney';
import Cardiac from '../Assets/Cardiac.svg'
import Pediatric from '../Assets/Pediatric.svg'
import Basic from '../Assets/Basic.svg'



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

export default function SimpleListr() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            {/* <AirportShuttleIcon/> */}
            <img src={Cardiac} className="Cardiac" alt="Cardiac" />

          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {/* <CalendarTodayIcon/> */}
            <img src={Pediatric} className="Pediatric" alt="Pediatric" />
          </ListItemIcon>
          {/* <ListItemText primary="Appointment" /> */}
        </ListItem>
      </List>
      {/* <Divider /> */}
      <List component="nav" aria-label="main mailbox folders">
          
        <ListItem button>
            {/* <FavoriteBorderIcon/> */}
            <img src={Basic} className="Basic" alt="Basic" />
          {/* <ListItemText primary="Health Care" /> */}
        </ListItem>
        <ListItemLink href="#simple-list">
            {/* <AttachMoney/> */}
            {/* <img src={Adam} className="Adam" alt="Adam" /> */}
          {/* <ListItemText primary="Finance" /> */}

        </ListItemLink>
      </List>
    </div>
  );

}
