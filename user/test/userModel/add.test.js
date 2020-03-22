const assert = require('assert');
const User = require('../../src/model/user');

describe('User model [add new record]', () => {
  it('should create new user', async () => {
    const user = new User({ name: 'Jane' });
    await user.save();

    assert(user.name === 'Jane');
    assert(user.isNew === false);
  });
});
