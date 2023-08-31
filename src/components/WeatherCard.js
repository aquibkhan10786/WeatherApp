import React from 'react';
import '../App.css';
const kelvinToCelsius = (kelvin) => kelvin - 273.15;
const WeatherCard = ({ weatherData }) => {
  const temperatureInCelsius = kelvinToCelsius(weatherData.main.temp);
  return (
    <div className="weather-card">
      <h2>{weatherData.name} ,{weatherData.sys.country}</h2>

      <p>Temperature:{temperatureInCelsius.toFixed(1)}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    
    </div>
  );
};

export default WeatherCard;
