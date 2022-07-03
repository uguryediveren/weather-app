import React from 'react'
import { UseWeather } from '../context/WeatherContext';
import UnixToDate from '../helpers/helpers';

export default function WeatherCard() {
    const { weather, cityName } = UseWeather();


    console.log("weatherCard", weather.daily);

    return (
        <React.Fragment>
            <div className='widget-wrapper'>
                {
                    weather.daily && weather.daily.map((day, index) => {
                        return (<article key={index} className="widget col-3">
                            <div className="weatherIcon"><img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="" /></div>
                            <div className="weatherInfo">
                                <div className="temperature"><span>{day.temp.day}&deg;</span></div>
                                <div className="description">
                                    <div className="weatherCondition">{day.weather[0].description}</div>
                                    <div className="place">{cityName}</div>
                                </div>
                            </div>
                            <div className="date">{UnixToDate(day.dt)}</div>
                        </article>)
                    })
                }
            </div>


        </React.Fragment>
    )
}
