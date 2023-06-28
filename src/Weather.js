import React, { useEffect, useState } from 'react';

const initialState = {
    isLoaded: false,
    weather: [],
    error: null
  };


function Weather() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch('https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=${process.env.WEATHER_API_KEY}')
    .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
    .then((jsonifiedResponse) => {
        setWeather(jsonifiedResponse.results)
        setIsLoaded(true)
      })
    .catch((error) => {
      setError(error.message)
      setIsLoaded(true)
    });
  }, [])
  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  } else {
    return (
      <React.Fragment>
        <h1>Top Stories</h1>
      </React.Fragment>
    );
  }

}

export default Weather;