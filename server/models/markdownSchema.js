const mongoose = require('mongoose')

const markdownSchema = new mongoose.Schema({
	text: {
		type: String,
		required: [true, 'Text is a required field'],
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
})

const Markdown = mongoose.model('Markdown', markdownSchema)

module.exports = Markdown
