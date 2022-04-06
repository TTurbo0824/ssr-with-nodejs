const root = document.getElementById('root');
const getBnt = document.getElementById('get-bnt');
getBnt.addEventListener('click', () => getData());
async function getData() {
  root.textContent = '';
  const response = await fetch('/geolocation');
  let data = await response.json();
  data = data.data;
  for (let item of data) {
    const geo = document.createElement('div');
    geo.textContent = `latitude: ${item.latitude}° longitude: ${item.longitude}°`;
    const time = document.createElement('div');
    time.textContent = `time: ${item.time}`;
    root.append(time, geo);
  }
}
