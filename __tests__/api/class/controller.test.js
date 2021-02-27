const controller = require('../../../api/class/controller');
const { classInfo } = require('../../../__mocks__/class.mocks');

const Controller = controller();

const baseMock = 'Class';
const classId = '5f489a94ec79ea2808e79e38';

describe(`[${baseMock}] FUNCTIONS`, function () {
  test('[SAVE] should return object class created', () => {
    const create = {
      _id: '5f42a5ec4496161f1192bc99',
      "description": "First Video Class.",
      "length": 600,
      "category": "Category",
      "tags": [],
      "videoUrl": "url",
      "totalComments": 0,
      "thumbnailUrl": "thumbnailUrl",
      "totalLikes": 0,
      "avgRate": 0,
      "instructor": "instructor"
    };
    return Controller.save(create).then((classs) => {
      expect(classs.data).toStrictEqual(create);
    });
  });
});