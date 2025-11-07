import { Sun, Moon, Search, MapPin, Wind, Droplets, Eye, Gauge, CloudRain, Cloud, CloudSnow, CloudDrizzle, CloudLightning, CloudFog, Sunrise, Sunset } from 'lucide-react';

const WeatherCard = ({ weather, isCelsius, toggleUnit }) => {
    const getWeatherIcon = (main) => {
        const iconMap = {
            Clear: Sun,
            Clouds: Cloud,
            Rain: CloudRain,
            Drizzle: CloudDrizzle,
            Thunderstorm: CloudLightning,
            Snow: CloudSnow,
            Mist: CloudFog,
            Fog: CloudFog,
            Haze: CloudFog,
        };
        return iconMap[main] || Cloud;
    };

    const WeatherIcon = getWeatherIcon(weather.weather[0].main);
    const temp = isCelsius ? weather.main.temp : (weather.main.temp * 9 / 5) + 32;
    const feelsLike = isCelsius ? weather.main.feels_like : (weather.main.feels_like * 9 / 5) + 32;
    const unit = isCelsius ? '°C' : '°F';

    const formatTime = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-3xl shadow-2xl p-8 text-white">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-4xl font-bold mb-2">{weather.name}</h2>
                        <p className="text-xl opacity-90">{weather.sys.country}</p>
                    </div>
                    <button
                        onClick={toggleUnit}
                        className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-xl transition-all duration-300 backdrop-blur-sm"
                    >
                        {isCelsius ? '°F' : '°C'}
                    </button>
                </div>

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <WeatherIcon className="w-24 h-24" strokeWidth={1.5} />
                        <div>
                            <div className="text-7xl font-bold">{Math.round(temp)}{unit}</div>
                            <p className="text-xl mt-2 opacity-90">
                                Feels like {Math.round(feelsLike)}{unit}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-2xl capitalize mb-8 opacity-90">
                    {weather.weather[0].description}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Droplets className="w-5 h-5" />
                            <span className="text-sm opacity-75">Humidity</span>
                        </div>
                        <div className="text-2xl font-semibold">{weather.main.humidity}%</div>
                    </div>

                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Wind className="w-5 h-5" />
                            <span className="text-sm opacity-75">Wind</span>
                        </div>
                        <div className="text-2xl font-semibold">{Math.round(weather.wind.speed)} m/s</div>
                    </div>

                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Eye className="w-5 h-5" />
                            <span className="text-sm opacity-75">Visibility</span>
                        </div>
                        <div className="text-2xl font-semibold">{(weather.visibility / 1000).toFixed(1)} km</div>
                    </div>

                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Gauge className="w-5 h-5" />
                            <span className="text-sm opacity-75">Pressure</span>
                        </div>
                        <div className="text-2xl font-semibold">{weather.main.pressure} hPa</div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                        <Sunrise className="w-8 h-8" />
                        <div>
                            <div className="text-sm opacity-75">Sunrise</div>
                            <div className="text-lg font-semibold">{formatTime(weather.sys.sunrise)}</div>
                        </div>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                        <Sunset className="w-8 h-8" />
                        <div>
                            <div className="text-sm opacity-75">Sunset</div>
                            <div className="text-lg font-semibold">{formatTime(weather.sys.sunset)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
