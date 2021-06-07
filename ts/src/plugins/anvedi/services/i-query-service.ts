'use strict'
import UseCase from '../domain/use-case/use-case-base'

interface IQueryService {

    ReadOne(useCase: any): any

    ReadAll(useCase: any): any

}

export { IQueryService }