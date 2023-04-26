function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = temperature;
}
let apiKey = "892794fo690ac452af67bf2et14e703c";
let apiUrl = "https://api.shecodes.io/weather/v1/forecast?query=Abuja&key=892794fo690ac452af67bf2et14e703c&units=metric";


axios.get(apiUrl).then(displayTemperature);