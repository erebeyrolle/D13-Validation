const router = require('express').Router()

const controller = require('./controller.js')
const loginRouter = require('./auth/router.js')

router.post('/', controller.login)