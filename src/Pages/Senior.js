import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/Button';
import SeniorCard from '../Components/SeniorCard';
import DisableElevation8 from '../Components/ReqAppBt';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  App: {
    background: "#F1FFFB",
    height: "100%",
    alignContent: "center", alignItems: "center",
  },
});

export default function Senior() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
    <React.Fragment>
        <Container fixed>
          <SeniorCard/>
          
          <DisableElevation8/>

            {/* <DatePickers/> */}
            {/* <ContainedButtons/> */}
        </Container>
    </React.Fragment>
    </div>
  );
}