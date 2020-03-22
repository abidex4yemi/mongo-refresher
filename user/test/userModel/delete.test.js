const assert = require('assert');
const { User } = require('../../src/model');

describe('User model [delete an existing record]', () => {
  let user = {};

  beforeEach(async () => {
    user = new User({ name: 'Jane' });
    await user.save();
  });

  it('should remove record using model instance', async () => {
    await user.remove();
    const deletedUser = await User.findOne({ name: 'Jane' });
    assert(deletedUser === null);
  });

  it('should remove record using class method', async () => {
    const deletedUser = await User.deleteOne({ name: 'Jane' });
    assert(deletedUser.deletedCount === 1);
    assert(deletedUser.ok === 1);
  });

  it('should remove record using class method findOneAndDelete', async () => {
    await User.findOneAndDelete({ name: 'Jane' });
    const deletedUser = await User.findOne({ name: 'Jane' });
    assert(deletedUser === null);
  });

  it('should remove record using class method findByIdAndRemove', async () => {
    await User.findByIdAndRemove(user._id);
    const deletedUser = await User.findOne({ name: 'Jane' });
    assert(deletedUser === null);
  });
});
