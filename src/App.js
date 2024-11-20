import EventList from './components/EventList';
import Event from './components/Event';
import CitySearch from './components/CitySearch';
import './App.css';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import {extractLocations, getEvents } from './api';

const App = () => {

const [events, setEvents] = useState([]);
const [currentNOE, setCurrentNOE] = useState(32);
const [allLocations, setAllLocations] = useState([]);
const [currentCity, setCurrentCity] = useState("See all cities");
const [errorAlert, setErrorAlert] = useState(""); 


useEffect(() => {
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
    <EventList events={events} />
    <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/>
    <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
    
  </div>
    
  );
}

export default App;
