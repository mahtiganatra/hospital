import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import LilLogo from '../Assets/LilLogo.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: "#282c34",
    marginRight: theme.spacing(1),
  },
  toolbar: {
    color: "#282c34",
    minHeight: 50,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),

  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="#282c34"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>



          <Typography className={classes.title} variant="h4" noWrap>
            {/* Lilavati */}
            <img src={LilLogo} className="LilLogo" alt="LilLogo" />
          </Typography>
          {/* <IconButton aria-label="search" color="inherit"> */}
          {/* <SearchIcon /> */}
          {/* </IconButton> */}

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="#282c34"
            aria-label="open drawer"
          >
            <SearchIcon />
          </IconButton>

          <IconButton aria-label="display more actions" edge="end" color="inherit">
            {/* <MoreIcon /> */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
