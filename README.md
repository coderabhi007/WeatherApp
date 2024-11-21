# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- # Weather App

## Description
This Weather App allows users to check current weather and hourly weather forecasts for any city. The app uses data from various APIs to provide the weather details, including temperature, wind speed, humidity, and weather conditions.

## Features
- **City Search:** Users can input the name of a city to fetch weather information.
- **Current Weather:** Displays the current temperature, wind speed, and weather condition for the selected city.
- **Hourly Forecast:** Shows hourly weather details like temperature, humidity, and wind speed for the next few hours.
- **Responsive Design:** The app is designed to be responsive and works well on both desktop and mobile devices.
- **Error Handling:** Provides error messages if the city is not found or there is an issue fetching the weather data.

## Technologies Used
- **React:** For building the user interface and managing state.
- **Tailwind CSS:** For styling the application and making it responsive.
- **OpenCage Geocoding API:** To fetch latitude and longitude information for the entered city.
- **Open-Meteo API:** To fetch weather data such as current temperature, wind speed, humidity, and hourly forecasts.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/coderabhi007/WeatherApp.git
2.**Navigate to the project folder:**
cd WeatherApp
3.**Install dependencies:**
npm install
4.**Run the development server:**
npm start
****Peoject Structure***
src/
├── Components/             # Contains all the React components for the app
│   ├── Header/             # Header component with app logo and name
│   ├── SearchBox/         # Search box to input the city name
│   ├── Card/              # Displays the weather information for the selected city
│   ├── HourlyInfo/        # Shows the hourly weather forecast
│   └── Footer/            # Footer with links to GitHub, LinkedIn, LeetCode
├── Images/                 # Static images (e.g., logo)
src/
└── App.js                  # Main app component that manages state, fetches data, and renders components

