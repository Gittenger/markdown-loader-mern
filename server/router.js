const express = require('express')
const controllers = require('./controller')

const { getFile } = controllers

const router = express.Router()

router.get('/doc', getFile)

module.exports = router
