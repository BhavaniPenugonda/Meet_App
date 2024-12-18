import EventList from './components/EventList';
import Event from './components/Event';
import CitySearch from './components/CitySearch';
import './App.css';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import {extractLocations, getEvents } from './api';
import { InfoAlert ,ErrorAlert,WarningAlert} from './components/Alert';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';


const App = () => {

const [events, setEvents] = useState([]);
const [currentNOE, setCurrentNOE] = useState(32);
const [allLocations, setAllLocations] = useState([]);
const [currentCity, setCurrentCity] = useState("See all cities");
const [errorAlert, setErrorAlert] = useState(""); 
const [infoAlert, setInfoAlert] = useState("");
const [warningAlert, setWarningAlert] = useState("");



useEffect(() => {
  let warningText;
  if (navigator.onLine) {
    warningText = ""
  } else {
    warningText ="You are offline. Some features may not work"
  }
  setWarningAlert(warningText);
  fetchData();
}, [currentCity,currentNOE]);

const fetchData = async () => {
  const allEvents = await getEvents();
  const filteredEvents = currentCity === "See all cities" ? 
    allEvents :
    allEvents.filter(event => event.location === currentCity)
  setEvents(filteredEvents.slice(0, currentNOE));
  setAllLocations(extractLocations(allEvents));
}

return (
  <div className="App">
    <h1>Meet App</h1>
    <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
    <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
    
    <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <div className="charts-container">
      <CityEventsChart allLocations={allLocations} events={events} />
      <EventGenresChart events={events} />
      </div>
    <EventList events={events} />
    
  </div>
    
  );
}

export default App;
