'use strict'
export default interface IStartUp {

    registerConfig(options: any): void

    registerHooks(fastify: any, options: any): void

    registerPlugins(fastify: any, options: any): void

    registerRoutes(fastify: any, options: any): void

    registerServices(fastify: any, options: any): void

    start(options: any): void

    stop(options: any): void

}