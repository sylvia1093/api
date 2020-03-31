let mongoose = require('mongoose');

// Content schema
let ContentSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	parentContent: {
		type: mongoose.Schema.Types.ObjectId,
		default: null,
	},
	contentTitle: String,
	contentDescription: String,
	contentImage: String,
	contentArtist: String,
	contentTag: String,
	contentType: String,
	typeOfReaction: String,
	contentDeleted: {
		type: Boolean,
		default: false,
	},
	dateOfCreation: {
		type: Date,
		default: Date.now,
	},
	dateOfLastUpdate: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Content', ContentSchema);