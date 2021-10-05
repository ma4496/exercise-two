import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudRain,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function WeatherImage({ weatherType }) {
  switch (weatherType) {
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} />;
    case "Clear":
      return <FontAwesomeIcon icon={faSun} />;
    case "Rain" || "Thunderstorms":
      return <FontAwesomeIcon icon={faSnowflake} />;
    case "Snow":
      return <FontAwesomeIcon icon={faSun} />;
    default:
      return <FontAwesomeIcon icon={faCloud} />;
  }
}

export default WeatherImage;
