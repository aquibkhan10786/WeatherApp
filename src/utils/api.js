const API_KEY = 'ccb6cb8bece1b7cd539b3d546e73c355'; 
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city) => {
  try {
    const response = await fetch(`${API_BASE_URL}?q=${city}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching weather data: ' + error.message);
  }
};