'use strict'
import { Sequelize, Model, DataTypes } from "sequelize";
import BaseEntity from '../../anvedi/domain/entities/base-entity'
import K from '../constants'
import { City } from './city';

class State extends BaseEntity {
    
}

const StateModel = function(sequelize: Sequelize) : typeof State {
    State.init({
        // Model attributes are defined here
        Id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        Code: {
            type: DataTypes.STRING(K.DataLength.State.Code),
            allowNull: false
        },
        Name: {
            type: DataTypes.STRING(K.DataLength.State.Name),
            allowNull: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'State', // We need to choose the model name,
        timestamps: false,
        tableName: 'GEO_State'
    });
    State.hasMany(City, {
        as: 'Cities',
        foreignKey: 'StateId'
    });
    City.belongsTo(State);

    return State;
}

export {
    State,
    StateModel
}