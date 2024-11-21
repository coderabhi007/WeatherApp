import React from "react";

const Card = ({ city, state, postalCode, country, temperature, windSpeed, weatherCondition, lat, lng }) => {
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

  return (
    <div className="w-full max-w-lg mx-auto p-8 bg-gradient-to-r from-teal-400 via-blue-500 to-sky-600 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
      {/* Weather Info */}
      <div className="text-center text-white relative">
        <div className="absolute inset-0 bg-cover bg-center rounded-3xl opacity-20" style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?weather')` }}></div>

        {/* Overlay content */}
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold mb-4 tracking-wider text-shadow">{city}, {state}</h2>

          {/* New city information */}
          <p className="text-3xl mb-2">{country}</p>

          <div className="flex justify-center mb-6">
            <div className="text-lg font-medium px-6 py-4 bg-white bg-opacity-30 rounded-xl">
              <p className="text-sm">Temperature</p>
              <p className="text-4xl font-bold">{temperature}°C</p>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="text-lg font-medium px-6 py-4 bg-white bg-opacity-30 rounded-xl">
              <p className="text-sm">Wind Speed</p>
              <p className="text-4xl font-bold">{windSpeed} km/h</p>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-xl">Weather Condition: <span className="font-semibold">{weatherDescriptions[weatherCondition]}</span></p>
            <p className="text-sm">Latitude: {lat}</p>
            <p className="text-sm">Longitude: {lng}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
