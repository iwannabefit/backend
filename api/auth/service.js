const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')
const response = require('../../utils/responses')

function authService (storage) {
  const controller = require('./controller')(storage)

  async function register (req, res, next) {
    try {
      const { body: { email, password } } = req

      if (!email || !password) {
        return response.error(req, res, 'Email and Password are required', 400)
      }

      if (!passwordVerify(password)) {
        return response.error(req, res, 'Password must contains at least one number, one letter and one symbol and minimun length of 8', 400)
      }

      const passwordHash = await bcrypt.hash(password, 10)
      const register = await controller.create({ email, password: passwordHash })
      if (register) {
        return response.success(req, res, 'User registered succesfully', 201)
      }
      return response.error(req, res, 'Error while registering user', 500)
    } catch (err) {
      next(err)
    }
  }

  async function signIn (req, res, next) {
    const data = req.body
    try {
      if (!data.email || !data.password) {
        return response.error(req, res, 'Missing log in information', 401)
      }
      const dbUser = await controller.find({ email: data.email })
      console.log(dbUser)
      if (dbUser) {
        const passwordComparison = await bcrypt.compare(data.password, dbUser.password)
        if (passwordComparison) {
          delete dbUser.password
          console.log(dbUser)
          const token = await jwt.sign({ sub: dbUser._id, email: dbUser.email }, JWT_SECRET)
          return response.success(req, res, { id: dbUser._id, email: dbUser.email, token }, 200)
        }
      }
      return response.error(req, res, 'Unauthorized', 401)
    } catch (err) {
      next(err)
    }
  }

  function passwordVerify (password) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
  }

  return {
    register,
    signIn
  }
}

module.exports = authService
