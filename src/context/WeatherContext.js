import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { cities } from '../cities/cities.js';



const WeatherContext = createContext();

export function WeatherProvider({ children }) {

    const [weather, setWeather] = useState([]);
    const [cityName, setCityName] = useState("");

    const handleChange = (e) => {
        setCityName(cities[e.target.value].name);
        const latitude = cities[e.target.value].latitude
        const longitude = cities[e.target.value].longitude
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&lang=tr&units=metric`)
            .then(res => setWeather(res.data))
    }

    useEffect(() => {
        setCityName(cities[0].name);

        const latitude = cities[0].latitude
        const longitude = cities[0].longitude
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&lang=tr&units=metric`)
            .then(res => setWeather(res.data))
    }, [])


    console.log("weather", weather)

    const values = {
        handleChange,
        weather,
        cityName
    }

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )

}

export const UseWeather = () => useContext(WeatherContext);
