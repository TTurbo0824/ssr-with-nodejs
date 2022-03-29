const express = require('express');
const app = express();

app.listen(80, () => console.log('listening at 80'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/api', (request, response) => {
  console.log(request.body);
  const data = request.body;
  response.status(200).json({
    message: 'success',
    latitude: data.lat,
    longitude: data.lon
  });
});
