const express = require('express');
const router = express.Router();

const User = require("../models/users")
const Meeting = require("../models/meetings")

router.get('/users/all',function(req,res,next){
    User.find({}).select("-__v").then(function(users){
        res.send(users);
    }).catch(next);
});

router.post('/users/new',function(req,res,next){
    User.create(req.body).then(function(user){
        res.send(user._id);
    }).catch(next);
});

router.post('/meetings/new',async function(req,res,next){
    
    Meeting.create({"uid1":await User.findOne({"_id": req.body.uid1}),"uid2":await User.findOne({"_id": req.body.uid2})}).then(function(meeting){
        res.send(meeting._id);
    }).catch(next);
})

router.get('/meetings/all',function(req,res,next){
    Meeting.find({}).populate("uid1 uid2","-__v").select("-__v").then(function(meetings){
        res.send(meetings);
    }).catch(next);
})

module.exports = router;