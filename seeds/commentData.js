const {Comment} = require('../models');

const commentData = [
    {
        id: 1,
        content: 'I agree commenting is a great coding practice! I practice modular coding.',
        user_id: 2,
        post_id: 2
    },
    {
        id:2,
        content: 'I just started using mySQL, any tips?',
        user_id: 3,
        post_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;