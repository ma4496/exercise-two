import React, { useEffect, useMemo } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import WeatherCard from "../components/WeatherCard";

<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap"
  rel="stylesheet"
></link>;

const API_KEY = `604feb983a13dc348e646aa872aedba5`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();

  let query = useQuery();

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  useEffect(() => {
    const cityValue = query.get("city");
    setCity(cityValue);
  }, []);

  useEffect(() => {
    if (city) {
      axios
        .get(URL)
        .then(function (response) {
          setWeatherData(response.data);
        })
        .catch(function (error) {
          console.warn(error);
        });
    }
  }, [URL, city]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    if (!weatherData) return {};
    return {
      cloudiness: weatherData.clouds.all,
      currentTemp: Math.round(weatherData.main.temp),
      highTemp: Math.round(weatherData.main.temp_max),
      humidity: weatherData.main.humidity,
      lowTemp: Math.round(weatherData.main.temp_min),
      weatherType: weatherData.weather[0].main,
      windSpeed: weatherData.wind.speed,
    };
  }, [weatherData]);

  return (
    <main className="App">
      <header>
        <nav className="Navigation">
          <a href="/?city=paris">Paris</a>
          <a href="/?city=tokyo">Tokyo</a>
          <a href="/?city=seattle">Seattle</a>
          <a href="/?city=sydney">Sydney</a>
        </nav>
      </header>
      <h1 className="SelectedCity">{city}</h1>
      <WeatherCard
        cloudiness={cloudiness}
        currentTemp={currentTemp}
        highTemp={highTemp}
        humidity={humidity}
        lowTemp={lowTemp}
        weatherType={weatherType}
        windSpeed={windSpeed}
      />
    </main>
  );
}

export default Home;
