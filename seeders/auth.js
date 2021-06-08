'use strict'
const config = require('../dist/src/config.js').default
const helper  = require('./helper.js').SeedHelper

// models
function seedContext() {
    var authContext = require('../dist/src/plugins/auth/data/auth-context.js').AuthContextGetInstance(config)
    
    authContext.sequelize.sync({ force: true}).then(() => {
        initPermissions(authContext)
    })

    async function initPermissions(authContext) {
        await authContext.permissionRepository.bulkCreate([
            { Code: 'P01', Name: 'P01 Name' },
            { Code: 'P02', Name: 'P02 Name' },
            { Code: 'P03', Name: 'P03 Name' },
            { Code: 'P04', Name: 'P04 Name' },
            { Code: 'P05', Name: 'P05 Name' },
            { Code: 'P06', Name: 'P06 Name' },
            { Code: 'P07', Name: 'P07 Name' },
            { Code: 'P08', Name: 'P08 Name' },
            { Code: 'P09', Name: 'P09 Name' },
            { Code: 'P10', Name: 'P10 Name' },
            { Code: 'P11', Name: 'P11 Name' },
            { Code: 'P12', Name: 'P12 Name' },
            { Code: 'P13', Name: 'P13 Name' },
            { Code: 'P14', Name: 'P14 Name' },
            { Code: 'P15', Name: 'P15 Name' },
            { Code: 'P16', Name: 'P16 Name' },
            { Code: 'P17', Name: 'P17 Name' },
            { Code: 'P18', Name: 'P17 Name' },
            { Code: 'P19', Name: 'P19 Name' },
            { Code: 'P20', Name: 'P20 Name' },
        ]);
    }
}

seedContext()

console.log('done.');