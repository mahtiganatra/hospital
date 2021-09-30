import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import Emergency from '../Assets/Emergency.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Fab color="primary" aria-label="add"> */}
      {/* <img src={Emergency} className="Emergency" alt="Emergency"/> */}
        {/* <AddIcon /> */}
      {/* </Fab> */}
      <Fab color="secondary" aria-label="edit">
        {/* <EditIcon /> */}
        <img src={Emergency} className="Emergency" alt="Emergency"/>
      </Fab>
      {/* <Fab variant="extended"> */}
        {/* <NavigationIcon className={classes.extendedIcon} /> */}
        {/* Navigate */}
      {/* </Fab> */}
      {/* <Fab disabled aria-label="like"> */}
        {/* <FavoriteIcon /> */}
      {/* </Fab> */}
    </div>
  );
}
