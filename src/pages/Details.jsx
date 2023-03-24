import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dataJson from "../resources/json/data.json";
import "./details.css";

export default function Details() {
  const { id } = useParams();

  const [weather, setWeather] = useState("");

  useEffect(() => {
    switch (dataJson[id].current_weather) {
      case "Sun":
        setWeather(
          "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
        );
        break;
      case "Clear":
        setWeather(
          "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
        );
        break;
      case "Cloudy":
        setWeather(
          "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg"
        );
        break;
      case "Rain":
        setWeather(
          "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg"
        );
        break;
      case "Thunderstorm":
        setWeather(
          "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms.svg"
        );
        break;
      case "Overcast":
        setWeather(
          "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg"
        );
        break;

      default:
        setWeather(
          "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
        );
        break;
    }
  }, [id]);

  console.log(dataJson);
  return (
    <div>
      {dataJson.map((dataJ) => {
        return dataJ.id === Number(id) ? (
          <div className="card-container">
            <img src={weather} alt={id} />
            <h2 className="detailsTitle">{dataJ.city}</h2>
            <div className="detailsData">
              <p>Temps actuel: {dataJ.current_weather}</p>
              <p>Température: {dataJ.current_temperature}°</p>
              <p>Humidité: {dataJ.current_humidity}</p>
            </div>
            {dataJ.temperatures.map((temp) => {
              return (
                <div>
                  <p>
                    {temp.time} : température: {temp.temperature}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
}
