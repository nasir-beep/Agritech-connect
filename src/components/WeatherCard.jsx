import { useState, useEffect } from "react";
import axios from "axios";

function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Benoni&units=metric&appid=da00247b37a4b1ea98bee8020722ebeb`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load weather");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="card text-center">
        <p>Loading weather...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card text-center">
        <p className="text-red-500">{error}</p>
        <p className="text-sm text-gray-500 mt-2">Using demo data</p>

        <div className="mt-4">
          <p className="text-4xl mb-2">☀️</p>
          <p className="text-2xl font-bold">24°C</p>
          <p className="text-gray-600">Sunny</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="text-lg font-bold mb-4">Current Weather</h3>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-primary">
            {Math.round(weather.main.temp)}°C
          </p>
          <p className="text-gray-600 capitalize">
            {weather.weather[0].description}
          </p>
        </div>
        <div className="text-6xl">
          {weather.weather[0].main === "Clear" && "☀️"}
          {weather.weather[0].main === "Clouds" && "☁️"}
          {weather.weather[0].main === "Rain" && "🌧️"}
          {weather.weather[0].main === "Thunderstorm" && "⛈️"}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <div>
          <p className="text-gray-500">Humidity</p>
          <p className="font-semibold">{weather.main.humidity}%</p>
        </div>
        <div>
          <p className="text-gray-500">Wind</p>
          <p className="font-semibold">{weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;