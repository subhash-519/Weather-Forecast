import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import ThemeToggle from './components/ThemeToggle';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isCelsius, setIsCelsius] = useState(true);

  // Using a valid free API key
  const API_KEY = 'f33a484cf794d08d0148764789aaba32';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleUnit = () => setIsCelsius(!isCelsius);

  const fetchWeather = async (query) => {
    setLoading(true);
    setError('');
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?${query}&appid=${API_KEY}&units=metric`;
      console.log('Fetching weather from:', url);

      const response = await fetch(url);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'City not found. Please try again.');
      }

      const data = await response.json();
      console.log('Weather data:', data);
      setWeather(data);
      setError('');
    } catch (err) {
      console.error('Error fetching weather:', err);
      setError(err.message || 'Failed to fetch weather data. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(`q=${encodeURIComponent(city.trim())}`);
    } else {
      setError('Please enter a city name');
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    setLoading(true);
    setError('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(`lat=${latitude}&lon=${longitude}`);
      },
      (err) => {
        console.error('Geolocation error:', err);
        setError('Unable to retrieve your location. Please enter a city manually.');
        setLoading(false);
      }
    );
  };

  // Load default weather on mount
  useEffect(() => {
    fetchWeather('q=New York');
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }`}>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Weather App
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real-time weather updates for any location
          </p>
        </div>

        <SearchBar
          city={city}
          setCity={setCity}
          handleSearch={handleSearch}
          getLocation={getLocation}
          loading={loading}
        />

        {error && (
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-200 p-4 rounded-lg shadow-lg">
              <p className="font-semibold">⚠️ Error</p>
              <p>{error}</p>
            </div>
          </div>
        )}

        {loading ? (
          <Loader />
        ) : (
          weather && <WeatherCard weather={weather} isCelsius={isCelsius} toggleUnit={toggleUnit} />
        )}
      </div>
    </div>
  );
}