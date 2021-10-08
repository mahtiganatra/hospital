import React from 'react';
import Container from '@material-ui/core/Container';
import InfoCard from '../Components/InfoCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  App: {
    background: "#F1FFFB",
    height: "100%",
    alignContent: "center", alignItems: "center",
  },
});



export default function Info() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
    <React.Fragment>
        <Container fixed>
            <InfoCard/>


           
           
             
           
        </Container>
    </React.Fragment>
    </div>
  );
}