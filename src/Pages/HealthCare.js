import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/Button';
import HealthCareCard from '../Components/HealthCareCard';

export default function HealthCare() {
  return (
    <React.Fragment>
        <Container fixed>
          <HealthCareCard/>

            {/* <DatePickers/> */}
            {/* <ContainedButtons/> */}
        </Container>
    </React.Fragment>
  );
}