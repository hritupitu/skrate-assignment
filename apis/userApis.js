const express = require("express");
const router = express.Router();

const User = require("../models/users");

router.get("/all", function (req, res, next) {
	User.find({})
		.select("-__v")
		.then(function (users) {
			res.send(users);
		})
		.catch(next);
});

router.post("/new", function (req, res, next) {
	User.create(req.body)
		.then(function (user) {
			res.send(user._id);
		})
		.catch(next);
});

module.exports = router;