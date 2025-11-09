# 🌦️ Weatherly – Modern Weather Forecast App

A modern, responsive **Weather App** built with **React** and **Tailwind CSS**.  
It fetches real-time weather data using the **OpenWeatherMap API** and supports **light/dark mode**, **city search**, and **automatic location detection** via the **Geolocation API**.  
Designed with a clean, modular component structure and smooth UI transitions.

---

## 🚀 Tech Stack

- ⚛️ **React.js** – Component-based frontend library  
- 🎨 **Tailwind CSS** – For modern, responsive UI design  
- ☁️ **OpenWeatherMap API** – For real-time weather data  
- 📍 **Geolocation API** – For auto-detecting user location  
- 🌗 **Light/Dark Mode** – Toggle for theme switching  

---

## ✨ Features

✅ Search weather by city name  
✅ Show current temperature, humidity, wind speed, and weather icon  
✅ Detect and display weather for current location automatically  
✅ Toggle between **light and dark mode** with smooth transitions  
✅ Responsive design for both mobile and desktop  
✅ Optional temperature unit toggle (°C / °F)  
✅ Loading spinner while fetching data  
✅ Error handling for invalid cities or API errors  

---

## 📁 Project Structure

weatherly/
├── public/
├── src/
│ ├── components/
│ │ ├── SearchBar.jsx
│ │ ├── WeatherCard.jsx
│ │ ├── ThemeToggle.jsx
│ │ └── Loader.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── package.json
└── README.md


---

## ⚙️ Installation & Setup

Follow these steps to run the project locally 👇  

```bash
# Clone the repository
git clone https://github.com/subhash-519/Weather-Forecast.git

# Navigate to the project folder
cd weatherly

# Install dependencies
npm install

# Create an .env file and add your OpenWeatherMap API key
VITE_WEATHER_API_KEY=your_api_key_here

# Start the development server
npm run dev
