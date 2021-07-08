const router = require('express').Router();
const Post = require('../models/Post');

// Posts routes
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

router.get('/:id', async (req,res) => {
    try{
        const post = await Post.findOne({_id: req.params.id});
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

router.post('/', (req,res) => {  

    const post = new Post({
        title: req.body.title, 
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        })

    // Using async await

    // try{
    //     const savedPost = await post.save();
    //     res.json(savedPost);
    // }catch(err){
    //     res.json({message: err});
    // }

});

router.delete('/:id', async (req,res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.id});
        res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
});

router.patch('/:id', async (req,res) => {
    try{
        const updatedPost = await Post.updateOne({_id: req.params.id}, { $set: {description: req.body.description}});
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;