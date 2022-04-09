const root = document.getElementById('root');
// const getBnt = document.getElementById('get-record');
// getBnt.addEventListener('click', () => getData());

async function getData() {
  root.textContent = '';
  const response = await fetch('/geolocation');
  let data = await response.json();
  data = data.data;

  for (let item of data) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    const time = document.createElement('div');
    time.textContent = `time: ${item.time}`;
    const city = document.createElement('div');
    city.textContent = `city: ${item.city}`;
    const weather = document.createElement('div');
    weather.textContent = `weather: ${item.weather}`;
    const temperature = document.createElement('div');
    temperature.textContent = `temperature: ${item.temperature}°C`;
    const geo = document.createElement('div');
    geo.textContent = `latitude: ${item.latitude}° longitude: ${item.longitude}°`;

    itemContainer.append(time, city, weather, temperature, geo);
    root.append(itemContainer);
  }
}

getData();
