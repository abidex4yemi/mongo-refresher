const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    postCount: {
      type: Number
    }
  },
  { versionKey: false }
);

const User = mongoose.model('user', UserSchema);

module.exports = User;
