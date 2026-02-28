import { useState } from "react";
import Navbar from "../services/Navbar";
import Footer from "../services/Footer";
import WeatherCard from "../components/WeatherCard";

function Weather() {
  const [city, setCity] = useState("Benoni");
  const [searchCity, setSearchCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCity.trim()) {
      setCity(searchCity);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Weather Updates</h1>

        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Enter city name..."
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              className="input-field"/>
            <button type="submit" className="btn-primary whitespace-nowrap">
              Search
            </button>
          </form>
        </div>

        <div className="max-w-md mx-auto">
          <WeatherCard key={city} city={city} />
        </div>

        <div className="mt-12 bg-green-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Farming Tips</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Check soil moisture before irrigation</li>
            <li>• Protect young plants from strong winds</li>
            <li>• Plan harvesting during dry weather</li>
            <li>• Monitor for pests in warm conditions</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Weather;