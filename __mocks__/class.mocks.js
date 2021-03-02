const classInfo = [
  {
    "description": "First Video Class.",
    "length": 600,
    "category": "Category",
    "tags": [],
    "videoUrl": "url",
    "totalComments": 0,
    "thumbnailUrl": "thumbnailUrl",
    "totalLikes": 0,
    "avgRate": 0,
    "instructor": "instructor",
    "_id": "60382424e86bc25878a1dcd5"
  },
  {
    "description": "Second Video Class.",
    "length": 0,
    "category": "Category",
    "tags": [],
    "videoUrl": "url",
    "totalComments": 0,
    "thumbnailUrl": "thumbnailUrl",
    "totalLikes": 0,
    "avgRate": 0,
    "instructor": "instructor",
    "_id": "603824c7d98bfd53ececaa64"
  }
];

class Class {
  constructor(data) {
    this.data = data || false;
  }

  static find({ _id }) {
    console.log('🚀 ~ file: class.mocks.js ~ line 36 ~ Class ~ find ~ _id', _id);
    if (_id) return classInfo.filter(item => item._id == _id)[0];
    return classInfo;
  }

  static skip() {
    return classInfo;
  }

  static limit() {
    return classInfo;
  }

  static sort() {
    return classInfo;
  }

  static findById(_id) {
    if (!_id) {
      return undefined;
    }
    return classInfo.filter(item => item._id == _id)[0];
  }

  save() {
    classInfo.push(this.data);
    const item = classInfo[classInfo.length - 1];
    return item;
  }
}

module.exports = {
  Class,
  classInfo
};