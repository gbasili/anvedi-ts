'use strict'
import fp from 'fastify-plugin'
import { IGeoContainer, GeoContainer } from './services/geo-container'

async function authContainer(fastify: any, opts: any) {
    fastify.decorate('geoContainer', new GeoContainer())
}

export default fp(authContainer, {
    name: 'geoContainer'
})