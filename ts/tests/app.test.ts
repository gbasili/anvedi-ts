'use strict'
import tap from 'tap'
import config  from '../src/config'
import StartUp  from '../src/infrastructure/startup-test'
import Helper from './helper'
const helper = new Helper()
const startUp: StartUp = new StartUp()

tap.test('GET `/` route', t => {
  t.plan(4)
  
  const fastify = helper.buildFastify(startUp, config, {})

  // At the end of your tests it is highly recommended to call `.close()`
  // to ensure that all connections to external services get closed.
  t.teardown(() => helper.terminate(startUp, fastify))

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, response) => {
    t.error(err)
    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
    t.same(response.json(), { hello: 'world' })
  })
})
