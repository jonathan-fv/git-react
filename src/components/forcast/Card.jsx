import React, { useEffect, useState } from 'react';
import './card.css';

const Card = ({ day, currentWeather, id }) => {

  const [weather, setWeather] = useState('');

  useEffect(() => {
    switch (currentWeather) {
      case 'Sunny':
        setWeather('https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg');
        break;
      case 'Clear Sky':
        setWeather('https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg');
        break;
      case 'Cloudy':
        setWeather('https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg');
        break;
      case 'Rainy':
        setWeather('https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg');
        break;
      case 'Thunderstorm':
        setWeather('https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms.svg');
        break;
      case 'Overcast':
        setWeather('https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg');
        break;

      default:
        setWeather('https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg')
        break;
    }
  }, [currentWeather])

  return (
    <div className='card-container'>
      <a href={`/details/${id}`}>
        <img src={weather} alt={currentWeather} />
        <p className='card-day'>{day}</p>
      </a>
    </div>
  )
}

export default Card;
