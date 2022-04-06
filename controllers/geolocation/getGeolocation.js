const fetch = require('node-fetch');
require('dotenv').config();

const Datastore = require('nedb');
const database = new Datastore('database.db');

module.exports = async (request, response) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const data = request.body;
  const { lat, lon } = data;
  const currentTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const res = await fetch(apiUrl);
  const json = await res.json();
  console.log(json);

  database.loadDatabase();

  const payload = { time: currentTime, latitude: lat, longitude: lon };
  database.insert(payload);

  response.status(200).json({
    message: 'success',
    data: payload
  });
};
