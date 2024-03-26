const {Comment} = require('../models');

const commentData = [
    {
        content: 'I agree commenting is a great coding practice! I practice modular coding.',
        user_id: 2,
        post_id: 2
    }
];

const seedComments = Comment.bulkCreate(commentData);

module.exports = seedComments;