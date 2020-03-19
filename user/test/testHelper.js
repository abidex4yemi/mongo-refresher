const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/usersTest', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection
  .once('open', () => console.log('Connected to db successfully'))
  .on('error', (error) => console.log('Error', error));
