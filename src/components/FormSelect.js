import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { cities } from '../cities/cities.js';
import { UseWeather } from '../context/WeatherContext';



export default function FormSelect() {

    const { handleChange } = UseWeather();

    return (
        <div className='col-12'>
            <Form.Select onChange={handleChange} className='selectbox' aria-label="Default select example">
                {cities.map((city, index) => {
                    return <option key={index} value={index}>{city.name}</option>
                })}
            </Form.Select >

        </div>
    )
}
