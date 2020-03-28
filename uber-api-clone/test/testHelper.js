const mongoose = require('mongoose');
const config = require('../config/keys');

before((done) => {
  // connect to db
  mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: config.dbName
  });

  mongoose.connection
    .once('open', () => {
      console.log('Connected to db successfully');
      done();
    })
    .on('error', (error) => console.log('Error', error));
});

beforeEach((done) => {
  // drop all user record
  mongoose.connection.db.dropDatabase(() => {
    done();
  });
});

after((done) => {
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});
