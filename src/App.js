import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';



function App() {
  const [temp, setTemp] = useState(null)
  const [wind, setWind] = useState(null)
  return (
    <main>
      <SearchBar setTemp={setTemp} setWind={setWind} />
      <WeatherDisplay temp={temp} wind={wind} />
    </main>
  );
}

export default App;
