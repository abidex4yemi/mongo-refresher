const assert = require('assert');
const { User } = require('../../src/model');
const mockData = require('../mocData');

describe('User model [find existing record]', () => {
  let user = {};

  beforeEach(async () => {
    user = await User.insertMany(mockData.users);
  });

  it('should find a user with a specific ID', async () => {
    const existingUser = await User.findOne({ _id: user[0]._id });
    assert(existingUser._id.toString() === user[0]._id.toString());
  });

  it('should find user with a specific name', async () => {
    const existingUser = await User.findOne({ name: user[0].name });
    assert(existingUser.name === user[0].name);
  });

  it('should limit the result set to 2', async () => {
    const users = await User.find()
      .skip(1)
      .limit(2);

    assert(users.length === 2);
  });
});
