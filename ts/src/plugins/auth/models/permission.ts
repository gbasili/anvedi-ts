'use strict'
import { Sequelize, Model, DataTypes } from "sequelize";
import BaseEntity from '../../anvedi/domain/entities/base-entity'
import K from '../constants'

class Permission extends BaseEntity {
    
}

const PermissionModel = function(sequelize: Sequelize) : typeof Permission {
  Permission.init({
        // Model attributes are defined here
        Id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        Code: {
            type: DataTypes.STRING(K.DataLength.Permission.Code),
            allowNull: false
        },
        Name: {
            type: DataTypes.STRING(K.DataLength.Permission.Name),
            allowNull: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Permission', // We need to choose the model name,
        timestamps: false,
        tableName: 'USR_Permission'
    });
    return Permission;
}

export {
    Permission,
    PermissionModel
}