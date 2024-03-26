const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// GET homepage with 15 most recent posts
router.get('/', async (req, res) => {
    try{
        const dbPostData = await Post.findAll({
            include : [
                {
                    model: User,
                    attributes: ['name']
                }
            ],
            limit: 15,
            order: [Post, 'createdAt','DESC'],
        });

        const posts = dbPostData.map((post) => post.get({plain: true}));

        res.render('homepage', {
            posts,
            // loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one post
router.get('/posts/:id', async (req, res) => {
    try{
        const dbPostData = await Post.findByPk(req.params.id, {
            include : [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Comment,
                    attribute: ['title','content','createdAt'],
                }
            ],
            order: [
                Comment, 
                'createdAt',
                'DESC'
            ],
        });

        const post = dbPostData.get({plain: true});
        
        res.render('posts', {post,loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;