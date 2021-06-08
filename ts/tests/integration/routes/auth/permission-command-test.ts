'use strict'
import tap from 'tap'
import config  from '../../../../src/config'
import StartUp  from '../../startup-test'
import Helper  from '../../../helper'
const helper = new Helper()
const startUp: StartUp = new StartUp()

let qo: any = helper.getQueryOptions()

tap.test('CREATE route', t => {
  t.plan(4)
  const fastify = helper.buildFastify(startUp, config, {})
  t.teardown(() => helper.terminate(startUp, fastify))
  fastify.inject({ 
    method: 'POST', url: '/permission', payload: { Code: 'P101', Name: 'P101Name' } 
  }, (err, response) => {
    const respJson = response.json()
    t.equal(respJson.resultCode, 200, 'statusCode 200')
    t.ok(respJson.data.Id > 1, 'Id is greater than 1')
    t.equal(respJson.data.Code, 'P101', 'Code equal')
    t.equal(respJson.data.Name, 'P101Name', 'Name equal')
  })
})