const router = require('express').Router();
const { Post, User } = require('../../models');

// POST posts
router.post('/', async (req,res) => {
    try {
        const user = await User.findOne({
            where: {
                username:req.session.username,
            }
        });

        const dbPostData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: user.id,
        });

        res.status(200).json(dbPostData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// PUT post
router.put('/', async (req,res) => {
    try {
        console.log('PUT request body', req.body);

        const dbPostData = await Post.update(req.body, {
            where: {
                id: req.session.postId,
            }
        });

        if (dbPostData){
            res.status(200).json(dbPostData);
          } else {
            res.status(404).json([
              {
                message: 'No post with this id!'
              }
            ]);
          }       

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// DELETE post
router.delete('/', async (req, res) =>{
    try {
        console.log('DELETE req session id', req.session.postId);

        const dbPostData = await Post.destroy({
            where: {
                id: req.session.postId,
            }
        });

        if (dbPostData){
            res.status(200).json(dbPostData);
          } else {
            res.status(404).json([
              {
                message: 'No post with this id!'
              }
            ]);
          }       

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;