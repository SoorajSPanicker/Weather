function showWeather() {
  city = cname.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5fe36b192ffd1c36dffb6752bc1722b2`
  )
    .then((wea) => wea.json())
    .then((wea) => displayData(wea));
  function displayData(data) {
    ci = data.name;
    dt = Date();
    temp = eval(data.main.temp - 273.15);
    temp1 = temp.toFixed(1);
    des = data.weather[0].description;
    feel = eval(data.main.feels_like - 273.15);
    feel1 = feel.toFixed(1);
    co = data.sys.country;
    hu = data.main.humidity;
    wi = data.wind.speed;
    pr = data.main.pressure;
    result.innerHTML = `
        <h5 class="mt-2 mt-lg-2 mt-xxl-3">City name</h5>
      <div>${ci} <br/>${dt}</div>
      <h5 class="mt-2 mt-md-2 mt-xxl-3">Temperature</h5>
      <div>${temp1} C ${des} <br/> feels like ${feel1} C</div>
      <h2 class="mt-3 mt-lg-3 mt-md-3 mt-xxl-5">Weather Details</h2>
      <h5 class="mt-3 mt-lg-2 mt-xxl-3">Country</h5>
      <div>${co}</div>
      <h5 class="mt-3 mt-xxl-3">Humidity</h5>
      <div>${hu}%</div>
      <h5 class="mt-3 mt-xxl-3">Wind</h5>
      <div>${wi}Kmph</div>
      <h5 class="mt-3 mt-xxl-3">Pressure</h5>
      <div>${pr}</div> 
      `;
  }
}
function resetAll() {
  result.innerHTML = ``;
}
