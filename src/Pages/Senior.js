import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/Button';
import SeniorCard from '../Components/SeniorCard';
import DisableElevation8 from '../Components/ReqAppBt';

export default function Senior() {
  return (
    <React.Fragment>
        <Container fixed>
          <SeniorCard/>
          <DisableElevation8/>

            {/* <DatePickers/> */}
            {/* <ContainedButtons/> */}
        </Container>
    </React.Fragment>
  );
}