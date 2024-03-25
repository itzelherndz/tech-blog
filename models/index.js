const User = require('.User/');
const Post = require('./Post');
const Comment = require('./Comment');

// Post belongs to User
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// Comment belogns to User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

// User has many Posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// User has many Comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Post has many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Post,
    Comment,
};
