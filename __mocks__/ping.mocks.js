const pingInfo = [
  { // Password 123456
    _id: '5f489a94ec79ea2808e79e38',
    email: 'trololo@gmail.com',
    name: 'trololo'
  },
  {
    _id: '5f489b43d86cfd4d443827ef',
    email: 'trololo2@gmail.com',
    name: 'trololo2'
  }
];

class Ping {
  constructor(data) {
    this.data = data || false;
  }

  static find() {
    return pingInfo;
  }

  static findById(_id) {
    if (!_id) {
      return undefined;
    }
    return pingInfo.filter(item => item._id == _id)[0];
  }

  save() {
    pingInfo.push(this.data);
    const item = pingInfo[pingInfo.length - 1];
    return item;
  }
}

module.exports = {
  Ping,
  pingInfo
};