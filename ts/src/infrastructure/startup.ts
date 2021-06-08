'use strict'
import { rPermissions } from '../routes/auth/permission'
import { rRegions } from '../routes/geo/region'
import IStartUp from './i-startup'
import { AuthContextGetInstance } from '../plugins/auth/data/auth-context'
import { GeoContextGetInstance } from '../plugins/geo/data/geo-context'

class StartUp implements IStartUp {
    
    public registerConfig(options: any) {

    }

    public registerHooks(fastify: any, options: any) {
        fastify.decorateRequest('authContext', null)
        fastify.decorateRequest('geoContext', null)
        fastify.addHook('onRequest', async (request: any, reply: any) => {
            request.authContext = AuthContextGetInstance(options)
            request.geoContext = GeoContextGetInstance(options)
        })
    }

    public registerPlugins(fastify: any, options: any) {
        fastify.register(import('../plugins/auth/auth-container-plugin'), options)
        fastify.register(import('../plugins/geo/geo-container-plugin'), options)
    }

    public registerRoutes(fastify: any, options: any) {
        fastify.register(rPermissions, options)
        fastify.register(rRegions, options)
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
