const { Router } = require('express')
const router = Router()

function authRoutes (app, store) {
  const authService = require('./service')(store)

  router.post('/signup', authService.register)
  router.post('/signin', authService.signIn)

  app.use('/auth', router)
}

module.exports = authRoutes
