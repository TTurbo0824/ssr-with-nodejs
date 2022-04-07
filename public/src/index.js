const geoBnt = document.getElementById('geo-bnt');
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
      const json = await response.json();
      console.log(json);

      geoBnt.innerHTML = 'submit';
      document.getElementById('latitude').innerHTML = json.data.latitude;
      document.getElementById('longitude').innerHTML = json.data.longitude;
    });
  } else {
    console.log('geolocation not available');
  }
};
