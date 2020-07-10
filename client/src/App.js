import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Background from './images/background.jpg';
import Animal_Case from './components/Animal_Case';
import Human_Case from './components/Human_Case';
import SignUpPage from './components/SignUpPage';
import LoginPageHealthCenter from './components/LoginPageHealthCenter';
import LoginPageAdmin from './components/LoginPageAdmin';
import Health_center from './components/Health_center';
import New_human_case from './components/New_human_case';
import New_animal_case from './components/New_animal_case';

var sectionStyle = {
  backgroundImage: "url(" + Background + ")",
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

function App() {
  return (  
    <div style={sectionStyle}>
    <Router>
      <AppNavbar />
        <Switch>
          <Route path = '/' exact component={Home} />
          <Route path = '/human_case' component = {Human_Case} />
          <Route path = '/animal_case' component = {Animal_Case} />
          <Route path = '/signup' component={SignUpPage}/>
          <Route path = '/loginPage' component={LoginPageHealthCenter} />
          <Route path = '/loginPageAdmin' component={LoginPageAdmin} />
          <Route path = '/animal_case' component={Animal_Case} />
          <Route path= '/health_center' component={Health_center} />
          <Route path='/new_humancase' component={New_human_case}/>
          <Route path = '/new_animalcase' component={New_animal_case}/>
               </Switch>
    </Router>  
    </div>
  );  
}

export default App;
