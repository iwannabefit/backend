module.exports = function (injectedStore) {
  let store = injectedStore;

  if (!store) store = require('../../__mocks__/ping.mocks').Ping;

  const get = async () => {
    const item = await store.find();
    return item || false;
  };

  const save = async (body) => {
    const item = new store(body);
    await item.save();
    return item || false;
  };

  const me = async (_id) => {
    const item = await store.findById(_id);
    return item || false;
  };

  return {
    get,
    save,
    me
  };
};