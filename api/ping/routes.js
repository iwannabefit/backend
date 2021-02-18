const { Router } = require('express');
const router = Router();

const pingService = require('./service');

function pingRoutes(app, store) {
  const PingService = pingService(store);
  app.use('/ping', router);

  router.get('/', PingService.get);
  router.post('/save', PingService.save);
  router.get('/me/:_id', PingService.me);
}

module.exports = pingRoutes;