const geoBnt = document.getElementById('geo-bnt');
const weather = document.getElementById('weather');
weather.classList.add('invisible');
geoBnt.addEventListener('click', () => geoClicked());

const geoClicked = () => {
  if ('geolocation' in navigator) {
    console.log('geolocation available');
    geoBnt.innerHTML = 'loading';
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const data = { lat, lon };

      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      const response = await fetch('/geolocation', options);
      let json = await response.json();
      json = json.data;
      // console.log(json);

      geoBnt.innerHTML = 'submit';
     
      weather.classList.remove('invisible');
      weather.textContent = `The weather in ${json.city} is ${json.weather} with a temperature of ${json.temperature}°C`;
    });
  } else {
    console.log('geolocation not available');
  }
};
