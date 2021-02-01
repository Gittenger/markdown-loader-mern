const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

const Markdown = require('./models/markdownSchema')

dotenv.config({ path: './.env' })

const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(
		() => console.log('connected to mongodb successfully'),
		err => console.error(err)
	)

// read files
const mds = []
fs.readdirSync(path.join(__dirname, 'assets')).forEach(file => {
	const md = fs.readFileSync(path.join(__dirname, 'assets', file), 'utf-8')
	mds.push({ text: md })
})

const importData = async () => {
	try {
		await Markdown.insertMany(mds)
		console.log('Data successfully loaded')
		process.exit()
	} catch (err) {
		console.log(err)
	}
}

importData()
