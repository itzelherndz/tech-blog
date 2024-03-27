const router = require('express').Router();
const { Post, User } = require('../../models');

// POST posts
router.post('/', async (req,res) => {
    try {
        const user = await User.findOne({
            where: {
                username:req.body.username,
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
router.put('/:id', async (req,res) => {
    try {
        const dbPostData = await Post.update(req.body, {
            where: {
                id: req.params.id,
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
router.delete('/:id', async (req, res) =>{
    try {
        const dbPostData = await Post.destroy({
            where: {
                id: req.params.id,
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