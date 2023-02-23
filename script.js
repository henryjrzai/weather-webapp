const defaultValue = document.querySelector(".weather h3");
const image = document.querySelector(".weather img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".desc");
const humidity = document.querySelector(".humidity .text span");
const wind = document.querySelector(".wind span");

window.onload = () => {
  defaultValue.innerHTML = "Indonesia";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=indonesia&appid=6747eb51d48f1878d37520a481ae3e80&units=metric"
  )
    .then((response) => response.json())
    .then((response) => {
      switch (response.weather[0].main) {
        case "Clear":
          image.src = "img/clear.png";
          break;

        case "Rain":
          image.src = "img/rain.png";
          break;

        case "Snow":
          image.src = "img/snow.png";
          break;

        case "Clouds":
          image.src = "img/cloud.png";
          break;

        case "Haze":
          image.src = "img/wind.png";
          break;

        default:
          image.src = "";
      }

      temperature.innerHTML = `${parseInt(response.main.temp)}<span>°C</span>`;
      description.innerHTML = `${response.weather[0].description}`;
      humidity.innerHTML = `${response.main.humidity}%`;
      wind.innerHTML = `${parseInt(response.wind.speed)}Km/h`;
    });
};

const city = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

searchButton.addEventListener("click", () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city.value +
      "&appid=6747eb51d48f1878d37520a481ae3e80&units=metric"
  )
    .then((response) => response.json())
    .then((response) => {
      const result = document.querySelector(".result");
      if (response.cod === "404") {
        image.src = "img/404-error.png";
        temperature.innerHTML = "";
        defaultValue.innerHTML = "";
        description.innerHTML = "";
        humidity.innerHTML = "";
        wind.innerHTML = "";
        result.style.display = "none";
      } else {
        result.style.display = "";
      }

      switch (response.weather[0].main) {
        case "Clear":
          image.src = "img/clear.png";
          break;

        case "Rain":
          image.src = "img/rain.png";
          break;

        case "Snow":
          image.src = "img/snow.png";
          break;

        case "Clouds":
          image.src = "img/cloud.png";
          break;

        case "Haze":
          image.src = "img/wind.png";
          break;

        default:
          image.src = "";
      }

      defaultValue.innerHTML = `${response.name}`;
      temperature.innerHTML = `${parseInt(response.main.temp)}<span>°C</span>`;
      description.innerHTML = `${response.weather[0].description}`;
      humidity.innerHTML = `${response.main.humidity}%`;
      wind.innerHTML = `${parseInt(response.wind.speed)}Km/h`;
    });
  city.value = null;
});
