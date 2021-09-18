import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import PrimarySearchAppBar from '../Components/SearchBar';
import ContainedButtons from '../Components/AppBar';
import CheckboxLabels from '../Components/Checkbox';
import MaterialUIPickers2 from '../Components/Date';
import OutlinedCard from '../Components/HomepageCard';
import IconButtons from '../Components/HomeIcons';
import OutlinedCard1 from '../Components/BottomCard';
import PackagesCard from '../Components/PackagesCard';


export default function Package() {
  return (
    <React.Fragment>
        <Container fixed>
<PackagesCard/>
<IconButtons/>
<IconButtons/>
<IconButtons/>
<OutlinedCard1/>

           
           
             
           
        </Container>
    </React.Fragment>
  );
}