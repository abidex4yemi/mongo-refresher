const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const driverSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    driving: {
      type: Boolean,
      default: false
    },
    location: {
      type: pointSchema
    }
  },
  { timestamps: true, versionKey: false }
);

module.exports = driverSchema;
