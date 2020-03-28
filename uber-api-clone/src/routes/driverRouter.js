const express = require('express');
const driverController = require('../controllers/driver');

const driverRouter = express.Router();

driverRouter.post('/drivers', driverController.create);
driverRouter.put('/drivers/:id', driverController.update);

module.exports = driverRouter;
