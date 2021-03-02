const testServer = require('../../../utils/testServer');
const { classInfo } = require('../../../__mocks__/class.mocks');

const baseRoute = '/class';
const baseMock = 'Class';

const classId = '5f489a94ec79ea2808e79e38';

describe(`[${baseMock}] ENDPOINTS`, function () {
  jest.setTimeout(10000);

  const route = require('../../../api/class/routes');
  const request = testServer(route);

  describe(`Routes ${baseMock}`, function () {

    it(`[SAVE] Should return a 201 ${baseMock}`, function (done) {
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
      request.post(`${baseRoute}/`)
        .send(create)
        .end((err, res) => {
          expect(res.body).toMatchObject({
            error: expect.any(Boolean),
            status: expect.any(Number),
            data: expect.any(Object)
          });
          done();
        });
    });
  });
});