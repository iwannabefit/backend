const { Router } = require('express')
const router = Router()

function authRoutes (app, store) {
  const authService = require('./service')(store)

  router.post('/signin', authService.register)

  app.use('/auth', router)
}

module.exports = authRoutes
