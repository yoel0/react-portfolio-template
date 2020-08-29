import React, { useState } from 'react';
import axios from 'axios';

import WeatherResult from './WeatherResult';

export default function Weather() {
  // TODO: have error state that sets conditional rendering of an error component
  // TODO: Verify zip is actually a zip
  // TODO: Create custom object of deetz I want
  // see a form to input their zipcode
  // on submit, 
  // we will call the api using axios
  // set some state to store results
  // conditionally render a weather result component
  const [zip, setZip] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSubmit = e => {
    e.preventDefault()
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`
    axios.get(url)
    .then(res => {
      setWeather(res.data)
    }).catch(err => console.log(err))
  }
  return (
    <div>
      <h1>Find ⛈ in your America</h1>
      {weather ? <WeatherResult weather={weather} /> : null}
      <p>Enter your Zipcode to find current weather in your area!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="zip">Zipcode: </label>
        <input type="text" id="zip" onChange={ e => setZip(e.target.value)} />
        <input type="submit" value="Find Weather" />
      </form>
    </div>
  );
}