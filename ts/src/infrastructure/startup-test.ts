'use strict'
import { rPermissions } from '../routes/auth/permission'
import config from '../config'
import IStartUp from './i-startup'
import StartUp from './startup'

class StartUpTest extends StartUp implements IStartUp {
    
    public registerConfig(options: any) {
        super.registerConfig(options)
    }

    public registerHooks(fastify: any, options: any) {
        super.registerHooks(fastify, options)
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

export default StartUpTest