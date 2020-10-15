const router = require('express').Router()

const controller = require('./controller.js')
const baseRoute = '/:articleId/comment'

router.post(`${baseRoute}/`, controller.createComment)
router.delete(`${baseRoute}/:id`, controller.deleteComment)

module.exports = router
