const mongoose = require('mongoose')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

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
		process.exit(0)
	} catch (err) {
		console.log(err)
	}
}

const deleteData = async () => {
	try {
		await Markdown.deleteMany()
		console.log('Data successfully deleted')
		process.exit(0)
	} catch (err) {
		console.log(err)
	}
}

if (process.argv[2] === '--import') {
	importData()
} else if (process.argv[2] === '--delete') {
	deleteData()
} else {
	console.log('error: expected argument --import or --delete')
	process.exit(1)
}
