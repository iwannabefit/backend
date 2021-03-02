const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const errorsMiddleware = require('../utils/errors-middleware')
// Settings
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Middlewares
app.use(helmet())

// Routes
const pingRoutes = require('../api/ping/routes');
const classRoutes = require('../api/class/routes');
const authRoutes = require('../api/auth');

//Models Call
const Ping = require('../models/Ping');
const Class = require('../models/Class');
const User = require('../models/user');

// FULL ROUTER
pingRoutes(app, Ping);
classRoutes(app, Class);
authRoutes(app, User);

// Error handling
app.use(errorsMiddleware)

module.exports = app
