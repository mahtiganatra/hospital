import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import Services from './Pages/Services';
import HealthCare from './Pages/HealthCare';
import Package from './Pages/Package';
import Senior from './Pages/Senior';
import Checkup from './Pages/Checkup';
import { Details } from '@material-ui/icons';
import Trial from './Pages/Trial';
import OutlinedCard1 from './Components/BottomCard';
import DisableElevation4 from './Components/EmergencyButton';
import ProminentAppBar from './Components/HomeBar';
import Info from './Pages/Info';
import Thankyou from './Pages/Thankyou';
import SimpleDialogDemo from './Components/EmergencyOpen';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  App: {
    background: "#F1FFFB",
    height: "100%",
  },
});


function App() {
  const classes = useStyles();


  return (
    <div className="App">
      {/* // <div className={classes.App}> */}

      {/* Header (Navigation Bar) */}
      <header className="App-header">
        <ProminentAppBar />

      </header>


      {/* Router - Pages */}
      <Switch>
        {/* <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route> */}
        <Route path={process.env.PUBLIC_URL + '/home'} > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery /> </Route>
        <Route path={process.env.PUBLIC_URL + '/services'}  > <Services /> </Route>
        <Route path={process.env.PUBLIC_URL + '/HealthCare'} > <HealthCare /> </Route>
        <Route path={process.env.PUBLIC_URL + '/Package'} > <Package /> </Route>
        <Route path={process.env.PUBLIC_URL + '/Senior'} > <Senior /> </Route>
        <Route path={process.env.PUBLIC_URL + '/Checkup'} > <Checkup /> </Route>
        <Route path={process.env.PUBLIC_URL + '/Details'} > <Details /> </Route>
        <Route path={process.env.PUBLIC_URL + '/Trial'} > <Trial /> </Route>
        <Route path={process.env.PUBLIC_URL + '/Info'} > <Info /> </Route>
        <Route path={process.env.PUBLIC_URL + '/Thankyou'} > <Thankyou /> </Route>

      </Switch>


      {/* <footer className="App-footer"> */}
      {/* This is a footer */}
      {/* <DisableElevation4/> */}
      <Grid container spacing={-8} justifyContent="flex-end">
        <SimpleDialogDemo />
      </Grid>

      {/* </footer> */}

      <OutlinedCard1 />

    </div>
  );
}

export default App;
