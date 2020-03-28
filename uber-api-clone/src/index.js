const express = require('express');

const connectDb = require('../db');
const config = require('../config/keys');
const rootRoute = require('./routes/rootRoute');
const driverRouter = require('./routes/driverRouter');

connectDb(config.mongoURI, config.dbName);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', rootRoute);
app.use('/api/v1', driverRouter);

app.use((err, req, res, next) => {
  return res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;
