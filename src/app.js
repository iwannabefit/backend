const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

// Settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middlewares
app.use(helmet());

// Routes
const pingRoutes = require('../api/ping/routes');
const classRoutes = require('../api/class/routes');

//Models Call
const Ping = require('../models/Ping');
const Class = require('../models/Class');

// FULL ROUTER
pingRoutes(app, Ping);
classRoutes(app, Class);

module.exports = app;
