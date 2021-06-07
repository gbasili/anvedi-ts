'use strict'
import { Permission, PermissionModel } from './entities/permission'
import { Sequelize, Model, DataTypes } from "sequelize";
import SequelizeContext from "../anvedi/data/sequelize/sequelize-context";
import { IAuthContext } from './IAuthContext';

export const AuthContextGetInstance = function(options: any) : IAuthContext {
    const sequelize = new Sequelize(
        options.db_anvedi_database, 
        options.db_anvedi_username, 
        options.db_anvedi_password, 
        {
            dialect: options.db_anvedi_dialect,
            dialectOptions: options.db_anvedi_dialect_options || {},
            storage: options.db_anvedi_storage, 
            logging: options.db_anvedi_logging
        }
    );
    return new AuthContext(sequelize)
}

class AuthContext extends SequelizeContext implements IAuthContext {
    readonly permissions: typeof Permission
    constructor(sequelize: Sequelize){
        super(sequelize)
        this.permissions = PermissionModel(sequelize)
    }
}

/*

async function authContext(fastify: any, opts: any) {
    const sequelize = new Sequelize(
        opts.db_anvedi_database, 
        opts.db_anvedi_username, 
        opts.db_anvedi_password, 
        {
            dialect: opts.db_anvedi_dialect,
            dialectOptions: opts.db_anvedi_dialect_options || {},
            storage: opts.db_anvedi_storage, 
            logging: opts.db_anvedi_logging
        }
    );

    const authContextInstance = new AuthContext(sequelize)
    fastify.decorateRequest('authContext', authContextInstance)
}

export default fp(authContext, {
    name: 'authContext'
})
*/

