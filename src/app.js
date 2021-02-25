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

// Models Call
const Ping = require('../models/Ping')

// FULL ROUTER
pingRoutes(app, Ping)

module.exports = app
