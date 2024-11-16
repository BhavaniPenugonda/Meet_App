import EventList from './components/EventList';
import Event from './components/Event';
import CitySearch from './components/CitySearch';
import './App.css';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { getEvents } from './api';

const App = () => {

const [events, setEvents] = useState([]);
const [currentNOE, setCurrentNOE] = useState(32);


const fetchData = async () => {
  const allEvents = await getEvents();
  setEvents(allEvents.slice(0, currentNOE));
}


useEffect(() => {
  fetchData();
}, []);



  return (
    <div className="App">
      <EventList events={events} />
      <CitySearch/>
      <Event/>
      <NumberOfEvents />
    
      
      </div>
    
  );
}

export default App;
