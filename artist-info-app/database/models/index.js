const mongoose = require('mongoose');
const artistSchema = require('./artist');

const Artist = mongoose.model('artist', artistSchema);

module.exports = {
  Artist
};
