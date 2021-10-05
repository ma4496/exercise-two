import React from "react";
import WeatherImage from "./WeatherImage";

function WeatherCard({
  cloudiness,
  currentTemp,
  highTemp,
  humidity,
  lowTemp,
  weatherType,
  windSpeed,
}) {
  return (
    <section className="WeatherCardWrapper">
      <div className="WeatherImageWrapper">
        <WeatherImage weatherType={weatherType} />
      </div>
      <p>
        WeatherType: <strong>{weatherType}</strong>
      </p>
      <p>
        cloudiness: <strong>{cloudiness}</strong>
      </p>
      <p>
        currentTemp: <strong>{currentTemp}</strong>
      </p>
      <p>
        highTemp: <strong>{highTemp}</strong>
      </p>
      <p>
        humidity: <strong>{humidity}</strong>
      </p>
      <p>
        lowTemp: <strong>{lowTemp}</strong>
      </p>
      <p>
        windSpeed: <strong>{windSpeed}</strong>
      </p>
    </section>
  );
}

export default WeatherCard;
