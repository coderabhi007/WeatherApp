import { useState } from "react";
import Card from "./Componenets/Card/Card";
import Header from "./Componenets/Header/Header";
import SearchBox from "./Componenets/SearchBox/SearchBox";
import HourlyInfo from "./Componenets/HourlyInfo/HourlyInfo"; // Import HourlyInfo
import Footer from "./Componenets/Fotter/Fotter";
function App() {
  const [city, setCity] = useState(""); // Current city
  const [data, setData] = useState(null); // Fetched data from geocode API
  const [lat, setLat] = useState(null); // Latitude
  const [lng, setLng] = useState(null); // Longitude
  const [weatherData, setWeatherData] = useState(null); // Fetched weather data
  const [hourlyData, setHourlyData] = useState(null); // Hourly weather data
  const [errorMessage, setErrorMessage] = useState(""); // Error message
  const [loading, setLoading] = useState(false); // Loading state

  const onSearch = (temp) => {
    setCity(temp);
    setErrorMessage(""); // Clear previous error message
    setLoading(true); // Start loading
    Search(temp);
  };

  const Search = (city) => {
    if (city) {
      // Fetch latitude and longitude using OpenCage API
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=949729d17beb4982bd237cc1158dfabe`
      )
        .then((res) => res.json())
        .then((data) => {
          const locations = data.results; // Get all results
          if (locations && locations.length > 0) {
            const location = locations[0]; // Set the first result
            setData(location); // Set full geocode data
            setLat(location.geometry.lat); // Set latitude
            setLng(location.geometry.lng); // Set longitude

            // Fetch weather information based on latitude and longitude
            fetchWeather(location.geometry.lat, location.geometry.lng);
          } else {
            setErrorMessage("City not found. Please enter a correct name."); // Set error message if no result
            setLoading(false); // Stop loading
          }
        })
        .catch((error) => {
          console.error("Error fetching geocode data:", error);
          setErrorMessage("Error fetching data. Please try again later.");
          setLoading(false); // Stop loading
        });
    }
  };

  const fetchWeather = (latitude, longitude) => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data.current_weather); // Set current weather data
        setHourlyData(data.hourly); // Set hourly weather data
        setLoading(false); // Stop loading after weather data is fetched
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setErrorMessage("Error fetching weather data. Please try again later.");
        setLoading(false); // Stop loading
      });
  };

  return (
    <>
      <Header />
      <SearchBox onSearch={onSearch} />

      {/* Display Loading Spinner when data is being fetched */}
      {loading && (
        <div className="flex justify-center items-center mt-8">
          <div className="relative w-24 h-24 border-8 border-t-8 border-blue-500 rounded-full animate-spin">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      )}

      {/* Show error message in large letters */}
      {errorMessage && !loading && (
        <div className="text-center text-red-500 font-bold text-4xl md:text-5xl lg:text-6xl mt-8">
          {errorMessage}
        </div>
      )}

      {/* Display weather card if weather data is available */}
      {weatherData && lat && lng && data && !errorMessage && !loading && (
        <Card
          city={city} // Display city from geocode response
          state={data.components.state || "State"} // Display state
          country={data.components.country || "Country"} // Display country
          temperature={weatherData.temperature}
          windSpeed={weatherData.windspeed}
          weatherCondition={weatherData.weathercode} // Directly passing weather code
          lat={lat}
          lng={lng}
        />
      )}

      {/* Display hourly weather data */}
      {hourlyData && !loading && !errorMessage && (
        <HourlyInfo hourlyData={hourlyData} />
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
