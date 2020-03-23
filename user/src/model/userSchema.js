const mongoose = require('mongoose');

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
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'post'
      }
    ],
    likes: {
      type: Number,
      default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { versionKey: false }
);

userSchema.virtual('postCount').get(function() {
  return this.posts.length;
});

userSchema.pre('remove', async function(next) {
  const Post = mongoose.model('post');

  await Post.remove({ _id: { $in: this.posts } });
  next();
});

module.exports = userSchema;
