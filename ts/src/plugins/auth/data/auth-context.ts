'use strict'
import { PermissionModel } from '../models/permission'
import { Sequelize } from "sequelize";
import SequelizeContext from "../../anvedi/data/sequelize/sequelize-context";
import { IAuthContext } from './i-auth-context';
import { IPermissionRepository, PermissionRepository } from './repositories/permission-repository';

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
    readonly permissionRepository: IPermissionRepository

    constructor(sequelize: Sequelize) {
        super(sequelize)
        this.permissionRepository = new PermissionRepository(PermissionModel(sequelize))
    }
}