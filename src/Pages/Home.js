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
import ProminentAppBar from '../Components/HomeBar';
import SimpleList from '../Components/HomeList';
import SwipeableTextMobileStepper from '../Components/HomeCar1';
import BasicTextFields from '../Components/UpdatesTxt';
import OutlinedCard4 from '../Components/UpdatesCard1';
import OutlinedCard5 from '../Components/UpdatesCard2';
import OutlinedCard6 from '../Components/UpdatesCard3';
import OutlinedCard7 from '../Components/UpdatesCard4';
import OutlinedCard8 from '../Components/UpdatesCard5';
import OutlinedCard9 from '../Components/UpdatesCard6';
import BasicTextFields1 from '../Components/TestimonialTxt';
import MediaCard from '../Components/TestimonialCard1';
import MediaCard1 from '../Components/TestimonialCard2';
import MediaCard2 from '../Components/TestimonialCard3';
import MediaCard3 from '../Components/TestimonialCard4';
import BasicTextFields2 from '../Components/SocialInitTxt';
import MediaCard5 from '../Components/SocilInitCard1'
import MediaCard6 from '../Components/SocialInitCard2';
import MediaCard7 from '../Components/SocialInitCard3';
import MediaCard8 from '../Components/SocialInitCard4';
// import Hospilogo from '../Assets/lilavati.svg'\
// import Ambulance from '../Assets/Ambulance.svg'
import Grid from '@material-ui/core/Grid';


export default function Home() {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={3} justifyContent="center">

          {/* <img src={Hospilogo} className="HospiLogo" alt="HospiLogo" /> */}


          {/* <ProminentAppBar/> */}

          <Grid item xs={10}>
            <OutlinedCard />
          </Grid>

          {/* <IconButtons/> */}
          {/* <IconButtons/> */}
          {/* <IconButtons/> */}
          {/* <OutlinedCard1/> */}
          {/* <SimpleList/> */}

          <Grid item xs={10}>
            <SwipeableTextMobileStepper />
          </Grid>

          <Grid item xs={10}>
            <BasicTextFields />
          </Grid>

          <Grid item xs={10}>
            <OutlinedCard4 />
          </Grid>

          <Grid item xs={10}>
            <OutlinedCard5 />
          </Grid>

          <Grid item xs={10}>
            <OutlinedCard6 />
          </Grid>

          <Grid item xs={10}>
            <OutlinedCard7 />
          </Grid>

          <Grid item xs={10}>
            <OutlinedCard8 />
          </Grid>

          <Grid item xs={10}>
            <OutlinedCard9 />
          </Grid>

          <Grid item xs={10}>
            <BasicTextFields1 />
          </Grid>

          <Grid item xs={10}>
            <MediaCard />
          </Grid>

          <Grid item xs={10}>
            <MediaCard1 />
          </Grid>

          <Grid item xs={10}>
            <MediaCard2 />
          </Grid>

          <Grid item xs={10}>
            <MediaCard3 />
          </Grid>

          <Grid item xs={10}>
            <BasicTextFields2 />
          </Grid>

          <Grid item xs={10}>
            <MediaCard5 />
          </Grid>

          <Grid item xs={10}>
            <MediaCard6 />
          </Grid>

          <Grid item xs={10}>
            <MediaCard7 />
          </Grid>

          <Grid item xs={10}>
            <MediaCard8 />
          </Grid>







        </Grid>

      </Container>
    </React.Fragment >
  );
}