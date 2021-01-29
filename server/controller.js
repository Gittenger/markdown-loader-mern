const getMarkdown = require('./utils/getMarkdown')
const path = require('path')

exports.getFile = (req, res) => {
	// id coming from front-end
	const id = req.query.id

	// right now this is a local file
	// later it should get .md str from DB
	const md = getMarkdown(path.join(__dirname, `assets/${id}.md`))

	res.status(200).json({
		message: 'success',
		data: md,
	})
}
