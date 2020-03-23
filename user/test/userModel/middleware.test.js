const assert = require('assert');
const { User, Post } = require('../../src/model');
const mockData = require('../mocData');

describe('user model [middleware]', () => {
  beforeEach(async () => {
    const user = new User({ name: mockData.users[0].name });
    const post = new Post(mockData.posts[0]);

    user.posts.push(post);

    await user.save();
    await post.save();
  });

  it('should remove user and all it posts', async () => {
    const user = await User.findOne({ name: mockData.users[0].name });
    await user.remove();
    const count = await Post.estimatedDocumentCount();

    assert(count === 0);
  });
});
