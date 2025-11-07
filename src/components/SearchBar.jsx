import React from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchBar = ({ city, setCity, handleSearch, getLocation, loading }) => (
    <div className="w-full max-w-2xl mx-auto mb-8">
        <div className="flex gap-2 mb-4">
            <div className="flex-1 relative">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Enter city name..."
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    disabled={loading}
                />
            </div>
            <button
                onClick={handleSearch}
                disabled={loading}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
                <Search className="w-5 h-5" />
                <span className="hidden sm:inline">Search</span>
            </button>
        </div>
        <button
            onClick={getLocation}
            disabled={loading}
            className="w-full px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <MapPin className="w-5 h-5" />
            Use Current Location
        </button>
    </div>
);

export default SearchBar;
