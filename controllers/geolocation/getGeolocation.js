const fetch = require('node-fetch');
require('dotenv').config();

const Datastore = require('nedb');
const database = new Datastore('database.db');

module.exports = async (request, response) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const data = request.body;
  const { lat, lon } = data;
  const currentTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  // const res = await fetch(apiUrl);
  // const fetchData = await res.json();
  const fetchData = {
    main: {
      temp: 286.72,
      feels_like: 284.65,
      temp_min: 282.9,
      temp_max: 288.87,
      pressure: 1017,
      humidity: 20
    },
    weather: [
      {
        main: 'Clear',
      }
    ],
    name: 'Seoul'
  };

  // console.log(fetchData);

  let temp = fetchData.main.temp - 273.15;
  temp = temp.toFixed(2);
  database.loadDatabase();

  const payload = {
    time: currentTime,
    latitude: lat,
    longitude: lon,
    city: fetchData.name,
    weather: fetchData.weather[0].main,
    temperature: temp
  };
  database.insert(payload);

  response.status(200).json({
    message: 'success',
    data: payload
  });
};
