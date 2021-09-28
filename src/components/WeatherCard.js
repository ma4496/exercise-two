import React from "react";

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
    <section className="WeatherCard">
        <p>
            WeatherType: <strong>{weatherType}</strong>
        </p>
        <p>
            cloudiness: <strong>{weatherType}</strong>
        </p>
        <p>
            currentTemp: <strong>{weatherType}</strong>
        </p>
        <p>
            highTemp: <strong>{weatherType}</strong>
        </p>
        <p>
            humidity: <strong>{weatherType}</strong>
        </p>
        <p>
            lowTemp: <strong>{weatherType}</strong>
        </p>
        <p>
            windSpeed: <strong>{weatherType}</strong>
        </p>
    </section>
    );
}

export default WeatherCard;