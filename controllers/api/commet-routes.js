const router = requiere('express').Router();
const { Comment, User, Post } = require('../../models');

// POST comment
router.post('/:id', async (req, res) => {
    try{
        const user = await User.findOne({
            where: {
                username:req.session.username,
            }
        });

        const dbCommentData = await Comment.create({
            content: req.body.content,
            user_id: user.id,
            post_id: req.params.id,
        });

        res.status(200).json(dbCommentData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;