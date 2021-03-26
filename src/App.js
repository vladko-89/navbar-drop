import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Location from './components/pages/Location';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Devices from './components/pages/Devices';
import PhonesInfo from './components/pages/PhonesInfo';
import Reports from './components/pages/Reports';
import PhonesRelocate from './components/pages/PhonesRelocate';
import PhonesFio from './components/pages/PhonesFio';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/location' exact component={Location} />
        <Route path='/devices' component={Devices} />
        <Route path='/phones/phones-info' component={PhonesInfo} />
        <Route path='/Reports' component={Reports} />
        <Route path='/phones/phones-relocate' component={PhonesRelocate} />
        <Route path='/phones/phones-fio' component={PhonesFio} />
      </Switch>
    </Router>
  );
}

export default App;
