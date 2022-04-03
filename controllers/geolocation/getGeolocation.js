const Datastore = require('nedb');
const database = new Datastore('database.db');

module.exports = (request, response) => {
  const data = request.body;
  const { lat, lon } = data;
  const currentTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  database.loadDatabase();

  const payload = { time: currentTime, latitude: lat, longitude: lon };
  database.insert(payload);

  response.status(200).json({
    message: 'success',
    data: payload
  });
};
