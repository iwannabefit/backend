const testServer = require('../../../utils/testServer')
const { pingInfo } = require('../../../__mocks__/ping.mocks')

const baseRoute = '/ping'
const baseMock = 'Ping'

const pingId = '5f489a94ec79ea2808e79e38'

describe(`[${baseMock}] ENDPOINTS`, function () {
  jest.setTimeout(10000)

  const route = require('../../../api/ping/routes')
  const request = testServer(route)

  describe(`Routes ${baseMock}`, function () {
    it(`[GET] Should return a collection of ${baseMock}`, function (done) {
      request.get(`${baseRoute}/`)
        .end((err, res) => {
          if (err) console.log(err)
          expect(res.body).toMatchObject({
            error: expect.any(Boolean),
            status: expect.any(Number),
            data: expect.any(Array)
          })
          done()
        })
    })

    it(`[SAVE] Should return a 201 ${baseMock}`, function (done) {
      const create = {
        _id: '5f42a5ec4496161f1192bc99',
        name: 'TEST INFO',
        email: 'test@hotmail.com'
      }
      request.post(`${baseRoute}/save`)
        .send(create)
        .end((err, res) => {
          if (err) console.log(err)
          expect(res.body).toMatchObject({
            error: expect.any(Boolean),
            status: expect.any(Number),
            data: expect.any(Object)
          })
          done()
        })
    })

    it(`[ME] should return info of the selected ${baseMock} record`, function (done) {
      request.get(`${baseRoute}/me/${pingId}`)
        .end((err, res) => {
          if (err) console.log(err)
          expect(res.body.data).toStrictEqual(pingInfo[0])
          done()
        })
    })
  })
})
