'use strict'
import { Sequelize, Model, DataTypes } from "sequelize";
import BaseEntity from '../../anvedi/domain/entities/base-entity'
import K from '../constants'
import { State } from './state';

class Country extends BaseEntity {
    
}

const CountryModel = function(sequelize: Sequelize) : typeof Country {
    Country.init({
        // Model attributes are defined here
        Id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        Code: {
            type: DataTypes.STRING(K.DataLength.Country.Code),
            allowNull: false
        },
        IsoCode2: {
            type: DataTypes.STRING(K.DataLength.Country.IsoCode2),
            allowNull: false
        },
        Name: {
            type: DataTypes.STRING(K.DataLength.Country.Name),
            allowNull: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Country', // We need to choose the model name,
        timestamps: false,
        tableName: 'GEO_Country'
    });
    Country.hasMany(State, {
        as: 'States',
        foreignKey: 'CountryId'
    });
    State.belongsTo(Country);
    return Country;
}

export {
    Country,
    CountryModel
}