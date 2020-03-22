const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      validate: {
        validator: (name) => name.length >= 2,
        message: 'Name must be at least two(2) characters'
      },
      required: [true, 'Name is required'],
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
