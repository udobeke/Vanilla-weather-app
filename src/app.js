function displayTemperature(response) {
  console.log(response.data);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round
    (response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}


let apiKey = "0c4358b449bfbe877c6b8dc889c84c8e";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Abuja&appid=0c4358b449bfbe877c6b8dc889c84c8e&units=metric";
axios.get(apiUrl).then(displayTemperature);