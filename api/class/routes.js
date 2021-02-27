const { Router } = require('express');
const router = Router();

const classService = require('./service');

function classRoutes(app, store) {
  const ClassService = classService(store);
  app.use('/class', router);

  router.post('/', ClassService.save);
}

module.exports = classRoutes;