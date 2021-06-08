'use strict'
import fp from 'fastify-plugin'
import { IAuthContainer, AuthContainer } from './services/auth-container'

async function authContainer(fastify: any, opts: any) {
    fastify.decorate('authContainer', new AuthContainer())
}

export default fp(authContainer, {
    name: 'authContainer'
})