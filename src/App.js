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


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/services'}  > <Services/> </Route>
            <Route path={process.env.PUBLIC_URL + '/HealthCare'} > <HealthCare/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Package'} > <Package/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Senior'} > <Senior/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Checkup'} > <Checkup/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Details'} > <Details/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Trial'} > <Trial/> </Route>
          </Switch>

      <footer className="App-footer">
        This is a footer
      </footer>
    </div>
  );
  }

export default App;
