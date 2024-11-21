# React + Vite

This template provides a minimal setup to get React working with Vite, complete with Hot Module Replacement (HMR) and ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

---

# Weather App

## Description

This Weather App allows users to check the current weather and hourly weather forecasts for any city. The app uses data from various APIs to provide detailed weather information, including temperature, wind speed, humidity, and weather conditions.

## Features

- **City Search:** Users can input the name of a city to fetch weather information.
- **Current Weather:** Displays the current temperature, wind speed, and weather condition for the selected city.
- **Hourly Forecast:** Shows hourly weather details like temperature, humidity, and wind speed for the next few hours.
- **Responsive Design:** The app is designed to be responsive, working seamlessly on both desktop and mobile devices.
- **Error Handling:** Displays error messages if the city is not found or there is an issue fetching the weather data.

## Technologies Used

- **React:** For building the user interface and managing state.
- **Tailwind CSS:** For styling the application and making it responsive.
- **OpenCage Geocoding API:** To fetch latitude and longitude information for the entered city.
- **Open-Meteo API:** To fetch weather data such as current temperature, wind speed, humidity, and hourly forecasts.

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/coderabhi007/WeatherApp.git
2. **Navigate to the project folder:**
   ```bash
   cd WeatherApp
3.**Install dependencies && Run the development server::**
   ```bash
    npm install
   npm start



