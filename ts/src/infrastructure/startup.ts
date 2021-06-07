'use strict'
import { rPermissions } from '../routes/auth/permission'
import * as authContext  from '../plugins/auth/auth-context'
import config from '../config'
import IStartUp from './i-startup'
import { AuthContextGetInstance } from '../plugins/auth/auth-context'

class StartUp implements IStartUp {
    
    public registerConfig(options: any) {

    }

    public registerHooks(fastify: any, options: any) {
        fastify.decorateRequest('authContext', null)
        fastify.addHook('onRequest', async (request: any, reply: any) => {
            request.authContext = AuthContextGetInstance(options)
        })
    }

    public registerPlugins(fastify: any, options: any) {
        //
    }

    public registerRoutes(fastify: any, options: any) {
        fastify.register(rPermissions, options)
    }

    public registerServices(fastify: any, options: any) {
        //fastify.register(import('../plugins/auth/services/service-container.js'), options)
    }

    public start(options: any){

    }

    public stop(options: any){
        try {

        } catch {

        }
    }
}

export default StartUp
