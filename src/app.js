const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')

// Settings
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Middlewares
app.use(helmet())

// Routes
const pingRoutes = require('../api/ping/routes')
const authRoutes = require('../api/auth')

// Models Call
const Ping = require('../models/Ping')
const User = require('../models/user')

// FULL ROUTER
pingRoutes(app, Ping)
authRoutes(app, User)

module.exports = app
