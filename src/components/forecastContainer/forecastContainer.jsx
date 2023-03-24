/* eslint-disable no-unused-expressions */
import React from 'react'
import ForeCasts from '../../resources/json/data.json'
import Card from '../forcast/Card';
import './forecastContainer.css'

const forecastContainer = (props) => {

    const city = props.cityId ;
    const foreCasts = ForeCasts;
    const cityForeCast = (cityChoosen) => foreCasts.filter((city) => {
        return city.id === cityChoosen;
    });
    const getDay = (currentdate) => {
        const date = new Date(currentdate);
        return day[date.getDay()];
    };
    const day = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
	return (
		<div>

            {city ? cityForeCast(city).map((foreCast, i) =>
                <div key={i}>
                    <h2>{foreCast.city}</h2>
                    <div className='cards'>
                    {foreCast.forecast_days.map((foreCastDetails, j) => {
                        return <div key={j} className="card">
                            <Card day={getDay(foreCastDetails.date)} currentWeather={foreCastDetails.average_weather} id={foreCastDetails.date} />
                        </div>
                    })}
                    </div>
                </div>
            ) : null} 
            <div>
                
            </div>
		</div>
	)
}

export default forecastContainer
