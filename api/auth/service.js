const response = require('../../utils/responses')

function authService (storage) {
  function register (req, res, next) {
    const { body: data } = req
    response.success(req, res, data)
  }

  return {
    register
  }
}

module.exports = authService
