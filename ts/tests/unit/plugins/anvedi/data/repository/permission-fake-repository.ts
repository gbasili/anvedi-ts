'use strict'
import { IRepository } from "../../../../../../src/infrastructure/data/i-repository";

export class FakeRepository implements IRepository<{}, number> {
    
    private _mocks: any[] = [
        { Id: 1, Code: "1", Name: "One" },
        { Id: 2, Code: "2", Name: "Two" },
        { Id: 3, Code: "3", Name: "Three" },
        { Id: 4, Code: "4", Name: "Four" },
        { Id: 5, Code: "5", Name: "Five" }
    ]

    constructor() {

    }

    async bulkCreate(ts: {}, sOptions: any): Promise<any> {
        //todo
        return ts
    }

    async count(options: any, sOptions?: any): Promise<number> {
        return this._mocks.length
    }
    
    async create(t: {}, sOptions: any): Promise<any> {
        const newItem = this.getById(1);
        if (newItem == null){
            this._mocks.push(t)
        }
        return t
    }
    
    async delete(t: {}, sOptions: any): Promise<any> {
        return {}
    }
    
    async readAll(options: any, sOptions?: any): Promise<any> {
        return this._mocks
    }
    
    readById(id: number, sOptions?: any): Promise<any> {
        return this.getById(id)
    }
    
    async save(t: {}, options: any, sOptions: any): Promise<any> {
        return t;
    }

    /* #region Privates */
    private getById(id: number): any {
        const item = this._mocks.filter((m) => {
            return m.Id == id
        });
        return (item && item.length > 0) ? item[0] : null
    }
    
}