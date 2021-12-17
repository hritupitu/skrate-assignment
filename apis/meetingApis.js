const express = require("express");
const router = express.Router();

const Meeting = require("../models/meetings");
const User = require("../models/users");

router.post("/new", async function (req, res, next) {
	Meeting.create({
		uid1: await User.findOne({ _id: req.body.uid1 }),
		uid2: await User.findOne({ _id: req.body.uid2 }),
	})
		.then(function (meeting) {
			res.send(meeting._id);
		})
		.catch(next);
});


router.get("/all", function (req, res, next) {
	Meeting.find({})
		.populate("uid1 uid2", "-__v")
		.select("-__v")
		.then(function (meetings) {
			res.send(meetings);
		})
		.catch(next);
});

module.exports = router;