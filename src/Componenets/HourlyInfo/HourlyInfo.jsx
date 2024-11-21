import React from 'react';

// Define a dictionary of weather conditions based on weather codes
const weatherDescriptions = {
  0: "Clear",
  1: "Partly Cloudy",
  2: "Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime Fog",
  51: "Light Drizzle",
  53: "Moderate Drizzle",
  55: "Heavy Drizzle",
  56: "Light Freezing Drizzle",
  57: "Heavy Freezing Drizzle",
  61: "Light Rain",
  63: "Moderate Rain",
  65: "Heavy Rain",
  66: "Light Freezing Rain",
  67: "Heavy Freezing Rain",
  71: "Light Snow",
  73: "Moderate Snow",
  75: "Heavy Snow",
  77: "Snow Grains",
  80: "Light Showers",
  81: "Moderate Showers",
  82: "Heavy Showers",
  85: "Light Snow Showers",
  86: "Heavy Snow Showers",
  95: "Thunderstorm",
  96: "Severe Thunderstorm",
  99: "Extreme Thunderstorm"
};

// HourlyInfo component that receives hourlyData as props
function HourlyInfo({ hourlyData }) {
  
  // Check if hourlyData is available, and if required fields are present
  if (!hourlyData || !hourlyData.time || !hourlyData.temperature_2m || !hourlyData.wind_speed_10m || !hourlyData.relative_humidity_2m) {
    // If any of the required data is missing, display a loading message
    return <p>Loading hourly data...</p>;
  }

  // Destructure the relevant data from the hourlyData prop
  const { time, temperature_2m, relative_humidity_2m, wind_speed_10m } = hourlyData;

  return (
    <div className="mt-6">
      {/* Title section for the Hourly Weather Information */}
      <h2 className="text-2xl font-semibold text-center text-blue-700 mb-4">Hourly Weather Information</h2>
      
      {/* Table to display hourly weather data */}
      <table className="min-w-full table-auto border-collapse border border-gray-300 text-center">
        
        {/* Table Header */}
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2">Time</th> {/* Time of observation */}
            <th className="px-4 py-2">Temperature (°C)</th> {/* Temperature in Celsius */}
            <th className="px-4 py-2">Wind Speed (m/s)</th> {/* Wind speed in meters per second */}
            <th className="px-4 py-2">Humidity (%)</th> {/* Humidity in percentage */}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {/* Loop through the 'time' array and map over it to display hourly data */}
          {time.map((t, index) => (
            <tr key={index} className="border-t border-gray-200">
              {/* Display each value in the corresponding table cell */}
              <td className="px-4 py-2">{new Date(t).toLocaleTimeString()}</td> {/* Format and display the time */}
              <td className="px-4 py-2">{temperature_2m[index]}</td> {/* Display temperature */}
              <td className="px-4 py-2">{wind_speed_10m[index]}</td> {/* Display wind speed */}
              <td className="px-4 py-2">{relative_humidity_2m[index]}</td> {/* Display humidity */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HourlyInfo;
