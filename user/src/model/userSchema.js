const mongoose = require('mongoose');
const postSchema = require('./postSchema');

const Schema = mongoose.Schema;

const userSchema = new Schema(
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
    posts: [postSchema],
    likes: {
      type: Number,
      default: 0
    }
  },
  { versionKey: false }
);

userSchema.virtual('postCount').get(function() {
  return this.posts.length;
});

module.exports = userSchema;
