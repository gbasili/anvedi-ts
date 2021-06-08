'use strict'
import tap from 'tap'
import config  from '../../../../src/config'
import StartUp  from '../../startup-unit-test'
import Helper  from '../../../helper'
const helper = new Helper()
const startUp: StartUp = new StartUp()
import K  from '../../../../src/plugins/anvedi/constants'

let qo: any = helper.getQueryOptions()

tap.test('GET `/permission/1` route', t => {
  t.plan(2)
  const fastify = helper.buildFastify(startUp, config, {})
  t.teardown(() => helper.terminate(startUp, fastify))
  fastify.inject({ 
    method: 'GET', url: '/permission/1', payload: {}
  }, (err, response) => {
    var resObj = response.json()
    t.equal(resObj.resultCode, 200)
    t.equal(resObj.data.Id, 1)
  })
})

tap.test('Permissions Id == 1', t => {
  t.plan(2)
  const fastify = helper.buildFastify(startUp, config, {})
  t.teardown(() => helper.terminate(startUp, fastify))

  qo.q = [ { "f": "Id", "o": K.Operator.EQUAL_TO, "v": 1, "t": "s" }]
  fastify.inject({
    method: 'POST', url: '/permissions', payload: qo
  }, (err, response) => {
    var resObj = response.json()
    t.equal(resObj.resultCode, 200)
    t.equal(resObj.total, 5)
  })
})