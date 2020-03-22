const assert = require('assert');
const User = require('../../src/model/user');

describe('User model [find existing record]', () => {
  let user = {};

  beforeEach(async () => {
    user = new User({ name: 'John' });
    await user.save();
  });

  it('should find a user with a specific ID', async () => {
    const existingUser = await User.findOne({ _id: user._id });
    assert(existingUser._id.toString() === user._id.toString());
  });

  it('should find user with a specific name', async () => {
    const existingUser = await User.findOne({ name: user.name });
    assert(existingUser.name === user.name);
  });
});
