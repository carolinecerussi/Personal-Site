import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=45.5152&lon=-122.676483&appid=380489ffc4d5c63096db0f7445986ce7&units=imperial
        `
      );
      setWeatherData(response.data);
      console.log(response.data); //You can see all the weather data in console log
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className='weather'>
      {weatherData ? (
        <>
          <h2><i class='fa fa-map-marker' ></i>&nbsp;
PORTLAND, OR
</h2>
          <h2>{weatherData.main.temp}°F </h2>
         <p> {weatherData.weather[0].description}</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;