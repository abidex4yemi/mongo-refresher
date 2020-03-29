const express = require('express');
const driverController = require('../controllers/driver');

const driverRouter = express.Router();

driverRouter.post('/drivers', driverController.create);
driverRouter.get('/drivers', driverController.find);
driverRouter.put('/drivers/:id', driverController.update);
driverRouter.delete('/drivers/:id', driverController.remove);

module.exports = driverRouter;
