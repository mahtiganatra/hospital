import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import PrimarySearchAppBar from '../Components/SearchBar';
import ContainedButtons from '../Components/AppBar';
import CheckboxLabels from '../Components/Checkbox';
import MaterialUIPickers2 from '../Components/Date';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>

            <DatePickers/>
        <PrimarySearchAppBar/>
           <ContainedButtons/>
           <CheckboxLabels/>
           <MaterialUIPickers2/>
           
           
             
           
        </Container>
    </React.Fragment>
  );
}