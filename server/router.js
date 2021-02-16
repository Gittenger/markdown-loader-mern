const express = require('express')
const controllers = require('./controllers/controller')

const { getFile, getAll } = controllers

const router = express.Router()

router.get('/doc', getFile)
router.get('/docs', getAll)

module.exports = router
