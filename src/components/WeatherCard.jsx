import { useState, useEffect } from "react";
import { 
  getCurrentWeather, 
  getForecast, 
  getWeatherByCoords,
  getWeatherIcon,
  formatTemp,
  getWeatherDescription,
  SOUTH_AFRICAN_CITIES 
} from "../services/weatherService";

export default function WeatherCard({ city = "Benoni" }) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [usingLocation, setUsingLocation] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchWeatherData = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const weatherResult = await getCurrentWeather(cityName);
      
      if (weatherResult.success) {
        setWeather(weatherResult.data);
        
        const forecastResult = await getForecast(cityName);
        if (forecastResult.success) {
          setForecast(forecastResult.data);
        }
        
        setLastUpdated(new Date());
      } else {
        setError("City not found. Please check the name.");
      }
    } catch (err) {
      setError("Failed to load weather data");
    } finally {
      setLoading(false);
    }
  };

  const getLocationWeather = () => {
    setUsingLocation(true);
    setError(null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            const result = await getWeatherByCoords(latitude, longitude);
            if (result.success) {
              setWeather(result.data);
              setLastUpdated(new Date());
            } else {
              setError("Could not get weather for your location");
            }
          } catch (err) {
            setError("Location weather failed");
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          setError("Please enable location access");
          setUsingLocation(false);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation not supported");
      setUsingLocation(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!usingLocation) {
      fetchWeatherData(city);
    }
  }, [city, usingLocation]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCity.trim()) {
      setUsingLocation(false);
      fetchWeatherData(searchCity);
      setSearchCity("");
    }
  };

  const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  if (loading) {
    return (
      <div className="card text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Loading weather data...</p>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="card">
        <div className="text-center mb-4">
          <p className="text-red-500 mb-2">{error || "Unable to load weather"}</p>
          <p className="text-sm text-gray-500">Showing demo data</p>
        </div>

        <div className="text-center">
          <div className="text-6xl mb-4">☀️</div>
          <p className="text-4xl font-bold text-primary mb-2">24°C</p>
          <p className="text-gray-600 mb-4">Sunny</p>
          <p className="text-sm text-gray-500">Benoni, South Africa</p>
        </div>

        <div className="grid grid-cols-5 gap-2 mt-6 pt-6 border-t">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
            <div key={i} className="text-center">
              <p className="text-sm font-semibold">{day}</p>
              <p className="text-xl">☀️</p>
              <p className="text-sm">{22 + i}°</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => fetchWeatherData("Benoni")}
          className="btn-primary w-full mt-4"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold flex items-center">
            <span className="mr-2">📍</span>
            {weather.name}, {weather.sys.country}
          </h3>
          {lastUpdated && (
            <p className="text-xs text-gray-500">
              Updated: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
        </div>
        <button
          onClick={() => usingLocation ? getLocationWeather() : fetchWeatherData(weather.name)}
          className="text-primary hover:text-green-700"
          title="Refresh"
        >
          🔄
        </button>
      </div>

      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search city..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="flex-1 p-2 border rounded-lg text-sm"
          />
          <button type="submit" className="btn-primary px-4 py-2 text-sm">
            Search
          </button>
        </div>
      </form>

      <div className="mb-6">
        <p className="text-sm font-semibold mb-2">Popular Cities:</p>
        <div className="flex flex-wrap gap-2">
          {SOUTH_AFRICAN_CITIES.slice(0, 5).map((cityName) => (
            <button
              key={cityName}
              onClick={() => {
                setUsingLocation(false);
                fetchWeatherData(cityName);
              }}
              className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200"
            >
              {cityName}
            </button>
          ))}
          <button
            onClick={getLocationWeather}
            className="text-xs bg-primary text-white px-2 py-1 rounded hover:bg-green-700"
          >
            📍 My Location
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-5xl font-bold text-primary">
            {formatTemp(weather.main.temp)}
          </p>
          <p className="text-gray-600 capitalize">
            {getWeatherDescription(weather.weather[0].main)}
          </p>
          <p className="text-sm text-gray-500">
            Feels like {formatTemp(weather.main.feels_like)}
          </p>
        </div>
        <div className="text-center">
          <img 
            src={getWeatherIcon(weather.weather[0].icon)} 
            alt={weather.weather[0].description}
            className="w-20 h-20"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-500">Humidity</p>
          <p className="font-semibold text-lg">{weather.main.humidity}%</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-500">Wind Speed</p>
          <p className="font-semibold text-lg">{weather.wind.speed} m/s</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-500">Pressure</p>
          <p className="font-semibold text-lg">{weather.main.pressure} hPa</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-500">Visibility</p>
          <p className="font-semibold text-lg">
            {(weather.visibility / 1000).toFixed(1)} km
          </p>
        </div>
      </div>

      {/* 5-Day Forecast */}
      {forecast.length > 0 && (
        <div className="border-t pt-4">
          <p className="font-semibold mb-3">5-Day Forecast</p>
          <div className="grid grid-cols-5 gap-2">
            {forecast.map((day, index) => (
              <div key={index} className="text-center">
                <p className="text-xs font-semibold">
                  {formatDay(day.dt)}
                </p>
                <img 
                  src={getWeatherIcon(day.weather[0].icon)} 
                  alt={day.weather[0].description}
                  className="w-8 h-8 mx-auto"
                />
                <p className="text-sm font-bold">
                  {formatTemp(day.main.temp)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sun times */}
      <div className="flex justify-between text-xs text-gray-500 mt-4 pt-4 border-t">
        <div>🌅 Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</div>
        <div>🌇 Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</div>
      </div>
    </div>
  );
}