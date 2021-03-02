module.exports = function (injectedStore) {
  let Store = injectedStore

  if (!Store) Store = require('../../__mocks__/ping.mocks').Ping

  const get = async () => {
    const item = await Store.find()
    return item || false
  }

  const save = async (body) => {
    const item = new Store(body)
    await item.save()
    return item || false
  }

  const me = async (_id) => {
    const item = await Store.findById(_id)
    return item || false
  }

  return {
    get,
    save,
    me
  }
}
