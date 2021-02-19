const controller = require('../../../api/ping/controller');
const { pingInfo } = require('../../../__mocks__/ping.mocks');

const Controller = controller();

const baseMock = 'Ping';
const pingId = '5f489a94ec79ea2808e79e38';

describe(`[${baseMock}] FUNCTIONS`, function () {
  describe(`Controller ${baseMock}`, function () {
    test(`[GET] should return collection of objects`, () => {
      return Controller.get().then((ping) => {
        expect(ping).toStrictEqual(pingInfo);
      });
    });

    test('[SAVE] should return object ping created', () => {
      const create = {
        _id: '5f42a5ec4496161f1192bc99',
        name: 'TEST INFO',
        email: 'test@hotmail.com',
      };
      return Controller.save(create).then((ping) => {
        expect(ping.data).toStrictEqual(create);
      });
    });

    test(`[ME] should return only one ${baseMock}`, () => {
      return Controller.me(pingId).then((ping) => {
        expect(ping).toStrictEqual(pingInfo[0]);
      });
    });
  });
});