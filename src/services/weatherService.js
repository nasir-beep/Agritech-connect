const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const SOUTH_AFRICAN_CITIES = [
  'Johannesburg',
  'Cape Town',
  'Durban',
  'Pretoria',
  'Benoni',
  'Bloemfontein',
  'Port Elizabeth',
  'Polokwane',
  'Nelspruit',
  'Kimberley'
];

export const getCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Weather data not found');
    }
    
    const data = await response.json();
    return {
      success: true,
      data: data
    };
  } catch (error) {
    console.error('Weather API Error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const getForecast = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Forecast data not found');
    }
    
    const data = await response.json();

    const dailyForecast = data.list.filter((item, index) => index % 8 === 0);
    
    return {
      success: true,
      data: dailyForecast
    };
  } catch (error) {
    console.error('Forecast API Error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Location weather not found');
    }
    
    const data = await response.json();
    return {
      success: true,
      data: data
    };
  } catch (error) {
    console.error('Location Weather Error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const getWeatherIcon = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export const formatTemp = (temp) => {
  return `${Math.round(temp)}°C`;
};

export const getWeatherDescription = (weather) => {
  if (!weather) return 'Unknown';
  
  const conditions = {
    'Clear': '☀️ Clear Sky',
    'Clouds': '☁️ Cloudy',
    'Rain': '🌧️ Rainy',
    'Drizzle': '🌦️ Light Rain',
    'Thunderstorm': '⛈️ Thunderstorm',
    'Snow': '❄️ Snowy',
    'Mist': '🌫️ Misty',
    'Fog': '🌫️ Foggy'
  };
  
  return conditions[weather] || weather;
};