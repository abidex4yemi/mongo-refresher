const mongoose = require('mongoose');
const config = require('../config/keys');
const Driver = mongoose.model('driver');

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

beforeEach(async () => {
  // drop all user record
  await mongoose.connection.db.dropDatabase();
  await Driver.ensureIndexes({ location: '2dsphere' });
});

after(async (done) => {
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});
