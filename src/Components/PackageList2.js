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
import Platinum from '../Assets/Platinum.svg'
import Gold from '../Assets/Gold.svg'
import Silver from '../Assets/Silver.svg'
import Adam from '../Assets/Adam.svg'


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

export default function SimpleListq() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            {/* <AirportShuttleIcon/> */}
            <img src={Platinum} className="Platinum" alt="Platinum" />

          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {/* <CalendarTodayIcon/> */}
            <img src={Gold} className="Gold" alt="Gold" />
          </ListItemIcon>
          {/* <ListItemText primary="Appointment" /> */}
        </ListItem>
      </List>
      {/* <Divider /> */}
      <List component="nav" aria-label="main mailbox folders">
          
        <ListItem button>
            {/* <FavoriteBorderIcon/> */}
            <img src={Silver} className="Silver" alt="Silver" />
          {/* <ListItemText primary="Health Care" /> */}
        </ListItem>
        <ListItemLink href="#simple-list">
            {/* <AttachMoney/> */}
            <img src={Adam} className="Adam" alt="Adam" />
          {/* <ListItemText primary="Finance" /> */}

        </ListItemLink>
      </List>
    </div>
  );

}
