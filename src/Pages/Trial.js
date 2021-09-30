import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedCard3 from '../Components/Card';
import SimpleList from '../Components/HomeList';
import TextMobileStepper1 from '../Components/HomeCar2';
import CenteredGrid from '../Components/TrialGrid';
import Grid from '@material-ui/core/Grid';





export default function Trial() {
  return (
    <React.Fragment>
        <Container fixed>
<OutlinedCard3/>
<TextMobileStepper1/>
<CenteredGrid/>






        </Container>
    </React.Fragment>
  );
}