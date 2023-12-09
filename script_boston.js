
    // Replace YOUR_RAPIDAPI_KEY with your actual RapidAPI key
    const API_KEY = 'YOUR_RAPIDAPI_KEY';
    const city = 'Boston';

    // Fetch weather data from OpenWeatherMap API
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': API_KEY
      }
    })
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    //   const weatherDataDiv = document.getElementById('weatherData');
    //   const temperature = data.main.temp;
    //   const description = data.weather[0].description;

    //   weatherDataDiv.innerHTML = `<p>Temperature: ${temperature}°C</p>
    //                               <p>Description: ${description}</p>`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
  

