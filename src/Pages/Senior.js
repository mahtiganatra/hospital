import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/Button';

export default function Senior() {
  return (
    <React.Fragment>
        <Container fixed>

            <DatePickers/>
            <ContainedButtons/>
        </Container>
    </React.Fragment>
  );
}