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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  App: {
    background: "#F1FFFB",
    height: "100%",
    alignContent: "center", alignItems: "center",
  },
});



export default function Package() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
    <React.Fragment>
        <Container fixed>
<PackagesCard/>

{/* <IconButtons/> */}
{/* <IconButtons/> */}
{/* <IconButtons/> */}
{/* <OutlinedCard1/> */}

           
           
             
           
        </Container>
    </React.Fragment>
    </div>
  );
}