const response = require('../../utils/responses')

function pingService (storeInjection) {
  const controller = require('./controller')

  const Controller = controller(storeInjection)

  const get = async (req, res, next) => {
    try {
      const item = await Controller.get()
      response.success(req, res, item, 201)
    } catch (error) {
      next(error)
    }
  }

  const save = async (req, res, next) => {
    const { body: data } = req

    try {
      const item = await Controller.save(data)

      response.success(req, res, item, 200)
    } catch (error) {
      next(error)
    }
  }

  const me = async (req, res, next) => {
    const { params } = req

    try {
      const item = await Controller.me(params._id)

      response.success(req, res, item, 200)
    } catch (error) {
      next(error)
    }
  }

  return {
    get,
    save,
    me
  }
}

module.exports = pingService
