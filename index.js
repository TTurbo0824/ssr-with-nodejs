const express = require('express');
const app = express();
const controllers = require('./controllers');

app.listen(80, () => console.log('http server running on port 80'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.get('/geolocation', controllers.getAllRecords);
app.post('/geolocation', controllers.getGeolocation);
