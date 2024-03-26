const {User} = require('../models');

const userData = [
    {
        username:'johnS',
        email: 'johnsmith@email.com',
        password: 'password123'
    },
    {
        username: 'janeD',
        email: 'janedoe@email.com',
        password: '123password'
    },
    {
        username: 'Alan1',
        email: 'alan1@email.com',
        password: 'password456'
    },
    {
        username: 'LeeTech',
        email: 'lee@email.com',
        password: '456password'
    },
    {
        username: 'codeBoss',
        email: 'thecodeboss@email.com',
        password: 'thepassword123'
    }
];


const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;