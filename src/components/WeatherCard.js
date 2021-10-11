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
    <section>
      <div className="WeatherCard">
        <div
          className="WeatherCardImage"
          style={{
            backgroundColor: `rgba(150, 150, 150, ${cloudiness / 100})`,
          }}
        >
          <WeatherImage weatherType={weatherType} />
        </div>
        <div className="WeatherNumbers">
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
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;
