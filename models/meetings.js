const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
	uid1: {
		type: Schema.Types.ObjectId,
		ref: "users",
	},
	uid2: {
		type: Schema.Types.ObjectId,
		ref: "users",
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Meeting = mongoose.model("meetings", MeetingSchema);

module.exports = Meeting;
