const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  copiesSold: {
    type: Number
  },
  tracks: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    trim: true
  },
  revenue: {
    type: Number
  }
});

module.exports = albumSchema;
