'use strict'
import { Sequelize, Model, DataTypes } from "sequelize";
import BaseEntity from '../../anvedi/domain/entities/base-entity'
import K from '../constants'
import { Country } from './country';

class Region extends BaseEntity {
    
}

const RegionModel = function(sequelize: Sequelize) : typeof Region {
    Region.init({
        // Model attributes are defined here
        Id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        Code: {
            type: DataTypes.STRING(K.DataLength.Region.Code),
            allowNull: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Region', // We need to choose the model name,
        timestamps: false,
        tableName: 'GEO_Region'
    });
    Region.hasMany(Country, {
        as: 'Countries',
        foreignKey: 'RegionId'
    });
    Country.belongsTo(Region);

    return Region;
}

export {
    Region,
    RegionModel
}