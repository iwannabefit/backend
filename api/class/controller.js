const { DB_LIMIT } = require('../../config/index');

module.exports = function (injectedStore) {
  let store = injectedStore;

  if (!store) store = require('../../__mocks__/class.mocks').Class;

  const save = async (body) => {
    const item = new store(body);
    await item.save();
    return item || false;
  };

  return {
    save
  };
};