'use strict'
import IStartUp from '../../src/infrastructure/i-startup'
import StartUp from '../../src/infrastructure/startup'
import { AuthContextFake } from './plugins/auth/data/auth-context-fake'

class StartUpUnitTest extends StartUp implements IStartUp {
    
    public registerConfig(options: any) {
        super.registerConfig(options)
    }

    public registerHooks(fastify: any, options: any) {
        fastify.decorateRequest('authContext', null)
        fastify.addHook('onRequest', async (request: any, reply: any) => {
            request.authContext = new AuthContextFake()
        })
    }

    public registerPlugins(fastify: any, options: any) {
        super.registerPlugins(fastify, options)
    }

    public registerRoutes(fastify: any, options: any) {
        super.registerRoutes(fastify, options)
    }

    public registerServices(fastify: any, options: any) {
        super.registerServices(fastify, options)
    }

    public start(options: any){
        super.stop(options)
    }

    public stop(options: any){
        super.stop(options)
    }
}

export default StartUpUnitTest