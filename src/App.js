import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { getWeatherData } from './utils/api';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        {weatherData && <WeatherCard weatherData={weatherData} />}
     <h6>Created by Mohd Aquib Khan</h6>
      </header>
    </div>
  );
}

export default App;
