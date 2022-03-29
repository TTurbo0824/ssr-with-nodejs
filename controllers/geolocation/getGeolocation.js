module.exports = (request, response) => {
  const data = request.body;
  const currentTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

  response.status(200).json({
    message: 'success',
    time: currentTime,
    latitude: data.lat,
    longitude: data.lon
  });
};
