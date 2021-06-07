'use strict'
import tap from 'tap'
import config  from '../../../src/config'
import StartUp  from '../../../src/infrastructure/startup-test'
import Helper  from '../../helper'
const helper = new Helper()
const startUp: StartUp = new StartUp()
import K  from '../../../src/plugins/anvedi/constants'

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

tap.test('Permissions Id = 10', t => {
  t.plan(2)
  const fastify = helper.buildFastify(startUp, config, {})
  t.teardown(() => helper.terminate(startUp, fastify))

  qo.q = [ { "f": "Id", "o": K.Operator.EQUAL_TO, "v": 10, "t": "s" }]
  fastify.inject({
    method: 'POST', url: '/permissions', payload: qo
  }, (err, response) => {
    var resObj = response.json()
    t.equal(resObj.resultCode, 200)
    t.equal(resObj.total, 1)
  })
})

tap.test('POST `/permissions` not equalto 1', t => {
  t.plan(2)
  const fastify = helper.buildFastify(startUp, config, {})
  t.teardown(() => helper.terminate(startUp, fastify))

  qo.q = [ { "f": "Id", "o": K.Operator.NOT_EQUAL_TO, "v": 1, "t": "s" }]
  fastify.inject({
    method: 'POST', url: '/permissions', payload: qo
  }, (err, response) => {
    var resObj = response.json()
    t.equal(resObj.resultCode, 200)
    t.equal(resObj.total, 19)
  })
})

tap.test('POST `/permissions` lt 6', t => {
  t.plan(2)
  const fastify = helper.buildFastify(startUp, config, {})
  t.teardown(() => helper.terminate(startUp, fastify))
  qo.q = [ { "f": "Id", "o": K.Operator.LESS_THAN, "v": 6, "t": "s" }]
  fastify.inject({
    method: 'POST', url: '/permissions', payload: qo
  }, (err, response) => {
    var resObj = response.json()
    t.equal(resObj.resultCode, 200)
    t.equal(resObj.total, 5)
  })
})

tap.test('POST `/permissions` lte 10', t => {
  t.plan(2)
  const fastify = helper.buildFastify(startUp, config, {})
  t.teardown(() => helper.terminate(startUp, fastify))
  qo.q = [ { "f": "Id", "o": K.Operator.LESS_THAN_OR_EQUAL_TO, "v": 10, "t": "s" }]
  fastify.inject({
    method: 'POST', url: '/permissions', payload: qo
  }, (err, response) => {
    var resObj = response.json()
    t.equal(resObj.resultCode, 200)
    t.equal(resObj.total, 10)
  })
})

tap.test('POST `/permissions` gt 5', t => {
  t.plan(2)
  const fastify = helper.buildFastify(startUp, config, {})
  t.teardown(() => helper.terminate(startUp, fastify))
  qo.q = [ { "f": "Id", "o": K.Operator.GREATER_THAN, "v": 5, "t": "s" }]
  fastify.inject({
    method: 'POST', url: '/permissions', payload: qo
  }, (err, response) => {
    var resObj = response.json()
    t.equal(resObj.resultCode, 200)
    t.equal(resObj.total, 15)
  })
})

tap.test('POST `/permissions` gte 15', t => {
  t.plan(2)
  const fastify = helper.buildFastify(startUp, config, {})
  t.teardown(() => helper.terminate(startUp, fastify))

  qo.q = [ { "f": "Id", "o": K.Operator.GREATER_THAN_OR_EQUAL_TO, "v": 15, "t": "s" }]
  fastify.inject({
    method: 'POST', url: '/permissions', payload: qo
  }, (err, response) => {
    var resObj = response.json()
    t.equal(resObj.resultCode, 200)
    t.equal(resObj.total, 6)
  })
})
