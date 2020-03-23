const assert = require('assert');
const { User } = require('../../src/model');
const mockData = require('../mocData');

describe('User Model virtual field', () => {
  it.skip('should get total number of posts', async () => {
    const user = new User({
      name: mockData.users[1].name,
      posts: mockData.posts[0]
    });

    await user.save();

    assert(user.postCount === 1);
  });
});
