const assert = require('assert');
const { User } = require('../../src/model');
const mockData = require('../mocData');

describe('Post model [add new record]', () => {
  it.skip('should create new post', async () => {
    const user = new User({
      name: mockData.users[0].name,
      posts: [mockData.posts[0]]
    });
    await user.save();

    assert(user.posts[0].title === mockData.posts[0].title);
    assert(user.posts[0].body === mockData.posts[0].body);
  });

  it.skip('should add new post to existing posts Array', async () => {
    // create new user
    const user = new User({
      name: mockData.users[1].name,
      posts: []
    });

    await user.save();

    // add new post
    user.posts.push(mockData.posts[1]);
    await user.save();

    assert(user.posts[0].title === mockData.posts[1].title);
  });
});
