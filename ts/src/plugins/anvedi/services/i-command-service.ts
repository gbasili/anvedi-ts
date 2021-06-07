'use strict'
import UseCaseCreateRequest from '../domain/use-case/use-case-base'

export interface ICommandService{

    Create(useCase: any): any

    Update(useCase: any): any

    Delete(useCase: any): any
}