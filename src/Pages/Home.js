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
import Ambulance from '../Assets/Ambulance.svg'

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
        {/* <img src={Hospilogo} className="HospiLogo" alt="HospiLogo" /> */}
        

        {/* <ProminentAppBar/> */}
<OutlinedCard/>
{/* <IconButtons/> */}
{/* <IconButtons/> */}
{/* <IconButtons/> */}
{/* <OutlinedCard1/> */}
{/* <SimpleList/> */}
<SwipeableTextMobileStepper/>
<BasicTextFields/>
<OutlinedCard4/>
<OutlinedCard5/>
<OutlinedCard6/>
<OutlinedCard7/>
<OutlinedCard8/>
<OutlinedCard9/>
<BasicTextFields1/>
<MediaCard/> 
<MediaCard1/>
<MediaCard2/>
<MediaCard3/>
<BasicTextFields2/>
<MediaCard5/>
<MediaCard6/>
<MediaCard7/>
<MediaCard8/>




           
           
             
           
        </Container>
    </React.Fragment>
  );
}