const express = require("express");
const supertest = require("supertest");
const bodyParser = require('body-parser')

function testServer(route, store) {
  const app = express();
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  route(app, store);
  return supertest(app);
}

module.exports = testServer;