const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// set up our express app
const app = express();


const mySecret = process.env['DB_URI']

// connect to mongodb
mongoose.connect(mySecret);
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.get("/",function(req,res){
    res.send("Hi!")
})

app.use(express.json());
// initialize routes
app.use('/users',require('./apis/userApis'));
app.use('/meetings',require('./apis/meetingApis'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

const PORT = process.env.PORT || 5000;

// listen for requests
app.listen(PORT, function(){
    console.log('The Server is Ready!');
});