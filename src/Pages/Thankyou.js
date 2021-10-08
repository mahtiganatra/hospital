import React from 'react';
import Container from '@material-ui/core/Container';
import ThankyouC from '../Components/ThankyouCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  App: {
    background: "#F1FFFB",
    height: "100%",
    alignContent: "center", alignItems: "center",
  },
});




export default function Thankyou() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
    <React.Fragment>
        <Container fixed>
          <ThankyouC/>
          
          
          


           
           
             
           
        </Container>
    </React.Fragment>
    </div>
  );
}