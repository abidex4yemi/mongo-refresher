const assert = require('assert');
const User = require('../src/model/user');

let newUser = {};

beforeEach(async () => {
  newUser = await User.create({ name: 'John' });
});

describe('User model [find existing record]', () => {
  it('should return a user record', async () => {
    const existingUser = await User.find({ name: 'John' });
    assert(existingUser.name === 'John');
  });
});
