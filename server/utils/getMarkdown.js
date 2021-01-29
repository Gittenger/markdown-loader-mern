const fs = require('fs')
const path = require('path')

const getMarkdown = file =>
	fs.readFileSync(path.resolve(__dirname, file), 'utf-8')

module.exports = getMarkdown
