const mongoose = require('mongoose');

before((done) => {
  // connect to db
  mongoose.connect('mongodb://localhost/usersTest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
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
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
