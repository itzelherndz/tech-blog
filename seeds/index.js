const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');
const sequelize = require('../config/connection');

const seedData = async () => {
    await sequelize.sync({force:true});

    await seedUsers();
    console.log('Users seeded');

    await seedPosts();
    console.log('Posts seeded');

    await seedComments();
    console.log('Comments seeded');

    process.exit(0);
}

seedData();