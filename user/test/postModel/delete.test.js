const assert = require('assert');
const { User } = require('../../src/model');
const mockData = require('../mocData');

describe('Post model [delete existing record', () => {
  it.skip('should remove a single post', async () => {
    // create new user and post
    const user = new User({
      name: mockData.users[2].name,
      posts: mockData.posts[1]
    });

    await user.save();

    // delete a post
    await user.posts[0].remove();
    user.save();

    assert(user.posts.length === 0);
  });
});
