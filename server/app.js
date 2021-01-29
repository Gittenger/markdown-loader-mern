const express = require('express')
const router = require('./router')
const cors = require('cors')

const app = express()

//allow CORS
app.use(cors())
app.options('*', cors())

//BODY PARSER -- READ DATA FROM BODY INTO REQ.BODY
app.use(
	express.json({
		limit: '10kb',
	})
)
app.use(
	express.urlencoded({
		extended: true,
		limit: '10kb',
	})
)

app.use('/', router)

module.exports = app
