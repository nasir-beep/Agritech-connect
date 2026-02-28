import { useState } from "react";
import Navbar from "../services/Navbar";
import Footer from "../services/Footer";
import WeatherCard from "../components/WeatherCard";
import { SOUTH_AFRICAN_CITIES } from "../services/weatherService";

export default function Weather() {
  const [selectedCity, setSelectedCity] = useState("Benoni");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Weather Updates</h1>
        <p className="text-gray-600 mb-8">
          Real-time weather data for farmers. Plan your farming activities with accurate forecasts.
        </p>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select City:
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="input-field max-w-xs"
          >
            {SOUTH_AFRICAN_CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="max-w-2xl mx-auto">
          <WeatherCard key={selectedCity} city={selectedCity} />
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2"></span>
              Weather-Based Farming Tips
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Sunny:</strong> Perfect for harvesting and spraying</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Rainy:</strong> Good for planting and fertilizing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Windy:</strong> Avoid spraying pesticides</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Cloudy:</strong> Ideal for transplanting seedlings</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2"></span>
              Weather Alerts
            </h2>
            <p className="text-gray-700 mb-4">
              Stay informed about extreme weather conditions:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-orange-600">
                <span className="mr-2">*</span>
                Heat wave precautions for crops
              </li>
              <li className="flex items-center text-blue-600">
                <span className="mr-2">*</span>
                Heavy rain flood prevention
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">*</span>
                Strong wind damage prevention
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}