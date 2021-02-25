require('dotenv').config()

const config = {
  PORT: process.env.PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWD: process.env.DB_PASSWD,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  JWT_SECRET: process.env.JWT_SECRET
}

module.exports = config
