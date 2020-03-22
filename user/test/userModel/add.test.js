const assert = require('assert');
const User = require('../../src/model/user');

describe('User model [add new record]', () => {
  it('should create new user', async () => {
    const user = await User.create({ name: 'Jane' });

    assert(user.name === 'Jane');
    assert(user.isNew === false);
  });
});
