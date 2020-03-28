const mongoose = require('mongoose');

const driverSchema = require('./driverSchema');

const Driver = mongoose.model('driver', driverSchema);

module.exports = {
  Driver
};
