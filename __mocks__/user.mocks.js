const userInfo = require('./mockdata/users-data.json')

class User {
  constructor (data) {
    this.data = data || false
  }

  static find () {
    return userInfo
  }

  static findById (_id) {
    if (!_id) {
      return undefined
    }
    return userInfo.filter(item => item._id === _id)[0]
  }

  create (data) {
    userInfo.push(data)
    return userInfo[userInfo.length - 1]
  }
}

module.exports = {
  User,
  userInfo
}
