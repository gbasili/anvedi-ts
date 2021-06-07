'use strict'
import buildFastify  from '../src/app'
import IStartUp from '../src/infrastructure/i-startup'
import config  from '../src/config'

class Helper {
    constructor(){

    }

    buildFastify(startUp: IStartUp, config: any, options: any){
        return buildFastify(startUp, { config: config, fastifyOptions: {}})
    }

    getQueryOptions(){
        return {
            "s": [{ "f": "Id", "a": false }],
            "p": { "l": 20, "o": 0 },
            "l":[],
            "i": []
        }
    }

    initialize(startUp: IStartUp, fastify: any){
        startUp.start({})
    }

    preExecute(fastify: any){

    }

    postExecute(fastify: any){
        
    }
    
    terminate(startUp: IStartUp, fastify: any){
        fastify.close()
        startUp.stop({})
    }
}

export default Helper
