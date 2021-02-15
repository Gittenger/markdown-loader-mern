const Markdown = require('../models/markdownSchema')

exports.getFile = async (req, res) => {
	// id coming from front-end
	const id = req.query.id

	const md = await Markdown.findById(id)

	res.status(200).json({
		message: 'success',
		data: md,
	})
}
