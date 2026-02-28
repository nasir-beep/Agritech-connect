// Weather service to handle all API calls
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Common cities in South Africa for quick access
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

// Get current weather for a city
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

// Get 5-day forecast
export const getForecast = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Forecast data not found');
    }
    
    const data = await response.json();
    
    // Group by day (API returns every 3 hours)
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

// Get weather by coordinates (for "My Location" feature)
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

// Helper to get weather icon
export const getWeatherIcon = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// Helper to format temperature
export const formatTemp = (temp) => {
  return `${Math.round(temp)}°C`;
};

// Helper to get weather condition description
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