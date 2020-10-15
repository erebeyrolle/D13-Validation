const router = require('express').Router()

const article = require('./article/router.js')
const comment = require('./comment/router.js')

router.use('/article', article)
router.use('/comment', comment)

module.exports = router
