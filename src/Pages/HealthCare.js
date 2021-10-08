import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/Button';
import HealthCareCard from '../Components/HealthCareCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  App: {
    background: "#F1FFFB",
    height: "100%",
    alignContent: "center", alignItems: "center",
  },
});

export default function HealthCare() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
    <React.Fragment>
        <Container fixed>
          <HealthCareCard/>

            {/* <DatePickers/> */}
            {/* <ContainedButtons/> */}
        </Container>
    </React.Fragment>
    </div>
  );
}