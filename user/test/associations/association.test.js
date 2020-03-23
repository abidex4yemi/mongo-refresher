const assert = require('assert');
const { User, Post, Comment } = require('../../src/model');
const mockData = require('../mocData');

describe('[user post comment] schema association', () => {
  beforeEach(async () => {
    const user = new User({ name: mockData.users[0].name });
    const post = new Post(mockData.posts[0]);
    const comment = new Comment(mockData.comments[0]);

    post.comments.push(comment);
    user.posts.push(post);

    comment.author = user;

    await user.save();
    await post.save();
    await comment.save();
  });

  it('should save relationship between user, post and comment', async () => {
    const user = await User.findOne({
      name: mockData.users[0].name
    }).populate('posts');

    assert(user.posts[0].title === mockData.posts[0].title);
  });

  it('should full relation user -> post -> comment tree', async () => {
    const user = await User.findOne({
      name: mockData.users[0].name
    }).populate({
      path: 'posts',
      populate: {
        path: 'comments',
        ref: 'comment',
        populate: {
          path: 'author',
          ref: 'user'
        }
      }
    });

    assert(user.name === mockData.users[0].name);
    assert(user.posts[0].title === mockData.posts[0].title);
    assert(user.posts[0].comments[0].body === mockData.comments[0].body);
    assert(user.posts[0].comments[0].author.name === mockData.users[0].name);
  });
});
