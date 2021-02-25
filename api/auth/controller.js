function authController (storage) {
  let Storage = storage
  if (!storage) {
    Storage = require('../../__mocks__/user.mocks').User
  }

  async function create ({ email, password }) {
    return Storage.create({ email, password })
  }

  return {
    create
  }
}

module.exports = authController
