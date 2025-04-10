async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = "bbec7df84b495683c8a4c71733952606"; 
    const resultDiv = document.getElementById('weatherResult');
  
    if (city === "") {
      resultDiv.innerHTML = "Please enter a city name!";
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === "404") {
        resultDiv.innerHTML = "City not found. Try again!";
      } else {
        const { name, main, weather } = data;
        resultDiv.innerHTML = `
          <h2>${name}</h2>
          <p>Temperature: ${main.temp}°C</p>
          <p>Feels like: ${main.feels_like}°C</p>
          <p>Weather: ${weather[0].description}</p>
        `;
      }
    } catch (error) {
      resultDiv.innerHTML = "Error fetching data. Try again later.";
    }
  }
  
