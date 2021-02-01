const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

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

const port = 5000

app.listen(port, () => {
	console.log(`app running on port ${port}...`)
})
