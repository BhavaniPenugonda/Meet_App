import EventList from './components/EventList';
import Event from './components/Event';
import CitySearch from './components/CitySearch';
import './App.css';
import NumberOfEvents from './components/NumberOfEvents';


function App() {
  return (
    <div className="App">
      <EventList/>
      <CitySearch/>
      <Event/>
    
      
      </div>
    
  );
}

export default App;
