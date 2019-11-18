'use strict';

// npm packages - 3rd party

require('dotenv').config();

const express = require('express');
const cors = require('cors');
// application constant

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;


app.get('/cool', (request, response) => {
  response.send('cool data from the / cool route');
});


// http://localhost:3001/location?data=seattle
app.get('/location', (request, response) => {
  // send the users current location back to them
  const geoData = require('./data/geo.json');
  const city = request.query.data;
  const locationData = new Location(city, geoData);
  response.send(locationData);
});

function Location(city, geoData) {
  this.search_query = city;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude = geoData.results[0].geometry.location.lng;
}

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});













