var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var CommentSchema = new Schema({
	// `body` is of type String
	body: {
		type: String,
		required: true
	},

	createdAt: {
		type: Date,
		default: Date.now()
	}
});

// This creates our model from the above schema, using mongoose's model method
var Comments = mongoose.model("Comments", CommentSchema);

// Export the Note model
module.exports = Comments;
