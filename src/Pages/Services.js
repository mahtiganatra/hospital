import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/Button';
import TrialGrid from '../Components/TrialGrid';

export default function Services() {
  return (
    <React.Fragment>
        <Container fixed>

            <DatePickers/>
            <ContainedButtons/>
            <TrialGrid/>
        </Container>
    </React.Fragment>
  );
}