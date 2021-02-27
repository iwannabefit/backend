const response = require('../../utils/responses');

function classService(storeInjection) {
  const controller = require('./controller');

  const Controller = controller(storeInjection);

  const save = async (req, res, next) => {
    const { body: data } = req;

    try {
      const item = await Controller.save(data);

      response.success(req, res, item, 200);
    } catch (error) {
      next(error);
    }
  };

  return {
    save
  };
}

module.exports = classService;