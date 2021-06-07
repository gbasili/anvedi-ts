'use strict'

export interface IModel {
    create(useCase: any, options: any): Promise<this>
    destroy(options: any): Promise<void>
    findByPk(id: any): Promise<this | null>
    findAll(options: any) : Promise<this[]>
    save(options: any): Promise<this>
}