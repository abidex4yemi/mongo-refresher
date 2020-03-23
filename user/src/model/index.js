const mongoose = require('mongoose');
const userSchema = require('./userSchema');
const postSchema = require('./postSchema');
const commentSchema = require('./commentSchema');

const User = mongoose.model('user', userSchema);
const Post = mongoose.model('post', postSchema);
const Comment = mongoose.model('comment', commentSchema);

module.exports = { User, Post, Comment };
