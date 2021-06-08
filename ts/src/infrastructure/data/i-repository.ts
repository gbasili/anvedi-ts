'use strict'
export interface IRepository<T, TKey> {
    bulkCreate (ts: T[], sOptions?: any): Promise<any>
    count(options: any, sOptions?: any): Promise<number>
    create(t: T, sOptions: any): Promise<any>
    delete(t: T, sOptions: any): Promise<any>
    readAll(options: any, sOptions?: any): Promise<any>
    readById(id: TKey, sOptions?: any): Promise<any>
    save(t: T, options: any, sOptions: any): Promise<any>
}