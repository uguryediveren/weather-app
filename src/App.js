import React, { Component } from 'react';
import './App.css';
import FormSelect from './components/FormSelect';
import WeatherCard from './components/WeatherCard';
import { WeatherProvider } from './context/WeatherContext';


class App extends Component {
  render() {
    return (

      <div className="App container mt-5">

        <WeatherProvider>
          <FormSelect />
          <WeatherCard />
        </WeatherProvider>

      </div>
    );
  }
}




export default App;
