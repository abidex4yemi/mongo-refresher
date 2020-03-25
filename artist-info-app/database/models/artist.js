const mongoose = require('mongoose');
const albumSchema = require('./album');

const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 2
  },
  yearsActive: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  genre: {
    type: String,
    trim: true,
    required: true
  },
  website: {
    type: String,
    trim: true
  },
  netWorth: {
    type: Number
  },
  labelName: {
    type: String
  },
  retired: {
    type: Boolean
  },
  albums: [albumSchema]
});

module.exports = artistSchema;
