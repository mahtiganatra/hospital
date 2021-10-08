import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedCard from '../Components/HomepageCard';
import IconButtons from '../Components/HomeIcons';
import OutlinedCard1 from '../Components/BottomCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  App: {
    background: "#F1FFFB",
    height: "100%",
    alignContent: "center", alignItems: "center",
  },
});


export default function Checkup() {
    const classes = useStyles();
  return (
    <div className={classes.App}>
    <React.Fragment>
        <Container fixed>
<OutlinedCard/>
<IconButtons/>
<IconButtons/>
<IconButtons/>
<OutlinedCard1/>

           
           
             
           
        </Container>
    </React.Fragment>
    </div>
  );
}