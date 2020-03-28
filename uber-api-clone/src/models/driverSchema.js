const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
    location: {}
  },
  { timestamps: true, versionKey: false }
);

module.exports = driverSchema;
