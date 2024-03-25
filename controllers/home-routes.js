const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// GET homepage
router.get('/', async (req, res) => {
    try{
        const dbPostData = await Post.findAll({
            include : [
                {
                    model: Post,
                    attributes: ['title', 'content'],
                },
                {
                    model: User,
                    attributes: ['name']
                }
            ],
            limit: 15,
            order: [
                Post, 
                'createdAt',
                'DESC'
            ],
        });

        const posts = dbPostData.map((post) => post.get({plain: true}));

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});