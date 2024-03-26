const {Post} = require('../models');

const postData = [
    {
        id: 1,
        title: 'mySQL',
        content: '"MySQL, the most popular Open Source SQL database management system, is developed, distributed, and supported by Oracle Corporation." - mySQL Website',
        user_id: 1
    },
    {
        id: 2,
        title: 'Coding Practices',
        content: 'I am curious, what coding practices do you reccomend? I enjoy leaving comments on my code for later referece and to help out anybody who might work with my code.',
        user_id: 5
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports =  seedPosts;