'use strict'
import fastify from 'fastify'
import IStartUp from './infrastructure/i-startup'

function build(startup: IStartUp, options: any) {
    startup.start(options)
    
    const app = fastify(options.fastifyOptions)

    app.get('/', async function (request, reply) {
        return { hello: 'world' }
    })

    // hooks
    startup.registerHooks(app, options.config)

    // plugins
    startup.registerPlugins(app, {})
    
    // routes
    startup.registerRoutes(app, {})
    
    // services
    startup.registerServices(app, {})

    return app
}

export default build