'use strict'
import { IRepository } from "./i-repository";

export class SequelizeRepository<T, TKey> implements IRepository<T, TKey> {
    private sequelizeModel: any;
  
    constructor (sequelizeModel: any) {
         this.sequelizeModel = sequelizeModel;
    }

    async bulkCreate(ts: T[], sOptions?: any): Promise<any> {
        return this.sequelizeModel.bulkCreate(ts)
    }

    count(options: any, sOptions?: any): Promise<any> {
        return this.sequelizeModel.count(options)
    }
    
    create(t: T, sOptions: any): Promise<T> {
        return this.sequelizeModel.create(t, sOptions)
    }

    delete(t: T | any, sOptions: any): Promise<any> {
        return t.destroy(sOptions)
    }
    
    readAll(options: any, sOptions?: any): Promise<any> {
        return this.sequelizeModel.findAll(options)
    }
    readById(id: TKey, sOptions?: any): Promise<T> {
        return this.sequelizeModel.findByPk(id)
    }
    save(t: T, sOptions: any): Promise<any> {
        return this.sequelizeModel.save(t, sOptions)
    }
}