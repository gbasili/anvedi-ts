'use strict'
import { Sequelize, Model, DataTypes } from "sequelize";
class SequelizeContext {
    public transaction: any
    readonly sequelize: Sequelize
    
    constructor(sequelize: Sequelize){
        this.sequelize = sequelize
        this.transaction = null
    }

    async beginTransaction(){
        this.transaction = await this.sequelize.transaction()
        return this.transaction
    }

    async commit(){
        this.transaction.commit()
    }

    async rollback(){
        this.transaction.rollback()
    }

}

export default SequelizeContext