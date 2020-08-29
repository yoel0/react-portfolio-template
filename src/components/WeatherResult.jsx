import React from 'react';

export default function WeatherResult(props) {
  return (
    <div>
      <h4>Weather for {props.weather.name}</h4>
      <p>Currently: {props.weather.main.temp}</p>
      <p>High: {props.weather.main.temp_max}</p>
      <p>Low: {props.weather.main.temp_min}</p>
    </div>
  );
}

// ((props.weather.main.temp - 273.15)*9/5+32)}°