const assert = require('assert');
const { User } = require('../../src/model');

describe('User model [update an existing record', () => {
  let user = {};

  beforeEach(async () => {
    user = new User({ name: 'John', postCount: 0 });
    await user.save();
  });

  it('should update user record using set and save model instance method', async () => {
    user.set('name', 'Jane');
    const updateUser = await user.save();
    assert(updateUser.name === 'Jane');
  });

  it('should update user record using update model instance method', async () => {
    const updatedUser = await user.updateOne(
      { name: 'Yemi' },
      { runValidators: true }
    );
    assert(updatedUser.nModified === 1);
    assert(updatedUser.ok === 1);
  });

  it('should update user record using update class (model) method', async () => {
    const updatedUser = await User.updateOne(
      { name: 'John' },
      { name: 'Lola' }
    );
    assert(updatedUser.nModified === 1);
    assert(updatedUser.ok === 1);
  });

  it('should update user record using findByIdAndUpdate class (model) method', async () => {
    await User.findByIdAndUpdate(user._id, {
      name: 'Smith'
    });

    const updatedUser = await User.findById(user._id);
    assert(updatedUser.name === 'Smith');
  });

  it('should increase a user postCount by 1', async () => {
    const updatedUser = await User.updateOne(
      { name: 'John ' },
      { $inc: { likes: 1 } }
    );

    assert(updatedUser.nModified === 1);
  });
});
