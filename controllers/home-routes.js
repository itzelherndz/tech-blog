const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET homepage with 15 most recent posts
router.get('/', async (req, res) => {
    try{
        const dbPostData = await Post.findAll({
            include : [
                {
                    model: User,
                    attributes: ['username']
                }],
            limit: 15,
            order: [ ['createdAt','DESC']]
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

// GET one post with comments
router.get('/posts/:id', async (req, res) => {
    try{
        const dbPostData = await Post.findByPk(req.params.id, 
            { include : [
                { 
                    model: User,
                    attributes: ['username']
                },
            ]}
        );

        const post = dbPostData.get({plain: true});

        const dbCommentData = await Comment.findAll({
            where: {
                post_id: req.params.id,
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })

        const comments = dbCommentData.map((comment) => comment.get({plain:true}));
        
        req.session.save(() => {
            req.session.postId = post.id;
        });        
        
        res.render('posts', {
            post,
            comments,
            loggedIn: req.session.loggedIn,
            user: req.session.username,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET login page
router.get('/login', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('login');
});

// GET sign up page
router.get('/signup', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('signup');
});

// GET users posts page
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                username: req.session.username,
            }
        });
        
        console.log(dbUserData);

        const userId = dbUserData.dataValues.id;

        const dbPostData = await Post.findAll({
            where: {
                user_id: userId
            }
        });

        const posts = dbPostData.map((post) => post.get({plain: true}));

        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;