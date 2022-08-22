const router = require('express').Router();
const Post = require('../models/Post');
// create a post

router.post('/', async (req, res) => {
    const newPost = new Post(req.body)
    try{
        const post = await newPost.save();
        res.status(200).json(post);
    }catch(e){
        res.status(500).json(e);
    }
})

//update a post

// delete a post

// like a post

// get a post

// get timeline posts

module.exports = router;