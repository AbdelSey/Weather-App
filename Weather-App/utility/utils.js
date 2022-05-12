// elements

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const weatherTitle = document.getElementById("weather-title");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humid");
const wind = document.getElementById("wind");

// functions

const getWeather = (query) => {
  const API_KEY = "6826536c16d7f3e7edef1abf4c77b0ce";

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${API_KEY}`;

  fetch(API)
    .then((response) => response.json())
    .then(displayWeather)
    .catch((err) => alert("Location does not exist. Please try again."));
};

const displayWeather = (response) => {
  weatherTitle.textContent = `Weather in ${response.name}`;
  temp.textContent = `${Math.floor(response.main.temp / 10)} °C`;
  humidity.textContent = `Humidity: ${response.main.humidity}%`;
  wind.textContent = `Forecast: ${response.weather[0].main}`;
};

export {
  searchBtn,
  searchInput,
  weatherTitle,
  temp,
  humidity,
  wind,
  getWeather,
  displayWeather,
};
