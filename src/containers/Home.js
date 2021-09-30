import React, { useEffect, useMemo } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import WeatherCard from "../components/WeatherCard";

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
      currentTemp: weatherData.main.temp,
      highTemp: weatherData.main.temp_max,
      humidity: weatherData.main.humidity,
      lowTemp: weatherData.main.temp_min,
      weatherType: weatherData.weather[0].main,
      windSpeed: weatherData.wind.speed,
    };
  }, [weatherData]);

  return (
    <main className="App">
      <header>
        <p>
          <a href="/?city=paris">Paris</a>
        </p>
        <p>
          <a href="/?city=tokyo">Tokyo</a>
        </p>
      </header>
      <h1>{city}</h1>
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
