const mongoose = require('mongoose')
const { DB_USER, DB_PASSWD, DB_NAME, DB_HOST } = require('../config')

const USER = encodeURIComponent(DB_USER)
const PASSWORD = encodeURIComponent(DB_PASSWD)
const HOST = DB_HOST

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?retryWrites=true&w=majority`

module.exports = {
  connection: null,
  connect: () => {
    if (this.connection) return this.connection
    return mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    }).then(connection => {
      this.connection = connection
      console.log('Sucessfull connection to DB')
    }).catch(err => console.log('err', err))
  }
}
