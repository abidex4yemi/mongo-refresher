const mongoose = require('mongoose');
const userSchema = require('./userSchema');

const User = mongoose.model('user', userSchema);

module.exports = { User };
