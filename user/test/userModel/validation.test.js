const assert = require('assert');
const { User } = require('../../src/model');

describe('validate provided user data', () => {
  it('should require a user name', () => {
    const user = new User({ name: '' });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Name is required');
  });

  it('should requires minimum length of name to be two(2)', () => {
    const user = new User({ name: 'A' });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === 'Name must be at least two(2) characters');
  });

  it('should prevent invalid record from being saved', async () => {
    const user = new User({ name: 'B' });

    try {
      await user.save();
    } catch (error) {
      const { message } = error.errors.name;
      assert(message === 'Name must be at least two(2) characters');
    }
  });
});
