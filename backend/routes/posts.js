const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');
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

router.put('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.updateOne(req.body, {new: true})
            res.status(200).json(post)
        }else{
            res.status(403).send('You are not authorized to update this post');
        }
    }catch(e){
        res.status(500).json(e);
    }
})

// delete a post

router.delete('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.deleteOne()
            res.status(200).json(post)
        }else{
            res.status(403).send('You are not authorized to update this post');
        }
    }catch(e){
        res.status(500).json(e);
    }
})
// like a post

router.put('/:id/like', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}}, {new: true})
            res.status(200).json(post)
        } else{
            await post.updateOne({$pull: {likes: req.body.userId}}, {new: true})
            res.status(200).json(post)
        }
    }catch(e){
        res.status(500).json(e);
    }
})

// get a post

router.get('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch(e){
        res.status(500).json(e);
    }
})

// get timeline posts

router.get('/timeline/all', async (req, res) => {
    let postArray = [];
    try{
        const currentUser = await User.findById(req.body.userId)
        const userPosts = await Post.find({userId: currentUser._id})
        const friendPosts = await Promise.all(
            currentUser.followings.map(async (friendId) => {
                return Post.find({userId: friendId})
            })
        )
        res.status(200).json(userPosts.concat(...friendPosts))
    }catch(e){
        res.status(500).json(e);
    }
})

module.exports = router;