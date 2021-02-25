function authController (storage) {
  let Storage = storage
  if (!storage) {
    Storage = require('../../__mocks__/user.mocks').User
  }

  async function create ({ email, password }) {
    const repeated = await find({ email })
    if (!repeated) {
      return Storage.create({ email, password })
    }
    return false
  }

  async function find ({ email }) {
    return Storage.findOne({ email })
  }

  return {
    create
  }
}

module.exports = authController
