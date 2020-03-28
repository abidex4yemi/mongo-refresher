const express = require('express');

const rootRoute = express.Router();

rootRoute.get('/', (req, res) => {
  return res.status(200).json({
    message: 'available api endpoints',
    driver_url: 'http://localhost:4000/api/v1/drivers'
  });
});

module.exports = rootRoute;
