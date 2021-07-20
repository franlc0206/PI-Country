import { Route } from 'react-router';
import './App.css';
import CountriesCards from './modules/CountriesCards/index.js';
import Nav from './modules/NavBar/NavBar';
import LandingPage from './modules/LandingPage/index';
import CountryDetail from './modules/CountryDetail/CountryDetail.js'
import CreateActivity from './modules/CreateActivity/CreateActivity.js';
import ActivitiesFilter from './modules/ActivitiesFilter/ActivitiesFilter.js';
import AboutMe from './modules/AboutMe/AboutMe.js';
function App() {
  return (
    <div className="App">
      <Route 
      exact path = '/'
      component={LandingPage}
      />
      <Route 
      path='/home'
      component = {Nav}
      />
      <Route 
      path='/home/!'
      component = {CountriesCards}
      />
      <Route 
      exact path='/home/country/:name'
      component={CountryDetail}
      />
      <Route 
      exact path='/home/create'
      component={CreateActivity}
      />
      <Route 
      exact path='/home/activity/:id'
      component={ActivitiesFilter}
      />
      <Route 
      exact path='/home/about'
      component={AboutMe}
      />
    </div>
  );
}

export default App;
