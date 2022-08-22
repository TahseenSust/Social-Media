const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
//update user
router.put('/:id', async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
       if(req.body.password){
        try{
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }catch(e){
            res.status(500).json(e);
        }
       }
         try{
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.status(200).json(user);
         }catch(e){
            res.status(500).json(e);
         }
    }else{
        res.status(403).send('You are not authorized to update this user');
    }
})


//delete user

router.delete('/:id', async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("user deleted");
        }catch(e){
            res.status(500).json(e);
        }
     }else{
         res.status(403).send('You are not authorized to update this user');
     }
})

//get a user

router.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...userWithoutPassword} = user.toObject();
        res.status(200).json(userWithoutPassword);
    }catch(e){
        res.status(500).json(e);
    }
})

//follow a user

router.put('/:id/follow', async (req, res) => {
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}})
                await currentUser.updateOne({$push: {followings: req.params.id}})
                return res.status(200).json("user followed")
            }
            else{
                return res.status(403).json("you are already following this user")
            }

        }catch(e){
            return res.status(500).json(e);
        }
    }else{
        return res.status(403).json("you cant follow yourself")
    }
})

//unfollow a user

router.put('/:id/unfollow', async (req, res) => {
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}})
                await currentUser.updateOne({$pull: {followings: req.params.id}})
                return res.status(200).json("user unfollowed")
            }
            else{
                return res.status(403).json("you dont follwo this user")
            }

        }catch(e){
            return res.status(500).json(e);
        }
    }else{
        return res.status(403).json("you cant follow yourself")
    }
})


module.exports = router;