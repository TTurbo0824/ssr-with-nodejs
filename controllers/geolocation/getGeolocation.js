const Datastore = require('nedb');
const database = new Datastore('database.db');

module.exports = (request, response) => {
  const data = request.body;
  const currentTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  database.loadDatabase();

  const payload = { time: currentTime, latitude: data.lat, longitude: data.lon };
  database.insert(payload);
  
  response.status(200).json({
    message: 'success',
    data: payload
  });
};
