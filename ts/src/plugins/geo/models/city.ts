'use strict'
import { Sequelize, Model, DataTypes } from "sequelize";
import BaseEntity from '../../anvedi/domain/entities/base-entity'
import K from '../constants'

class City extends BaseEntity {
    
}

const CityModel = function(sequelize: Sequelize) : typeof City {
    City.init({
        // Model attributes are defined here
        Id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        Code: {
            type: DataTypes.STRING(K.DataLength.City.Code),
            allowNull: false
        },
        Name: {
            type: DataTypes.STRING(K.DataLength.City.Name),
            allowNull: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'City', // We need to choose the model name,
        timestamps: false,
        tableName: 'GEO_City'
    });
    
    return City;
}

export {
    City,
    CityModel
}