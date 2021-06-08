'use strict'
import UseCase from '../../anvedi/domain/use-case/use-case-base.js'
import { IUseCaseDeleteRequest } from '../../anvedi/domain/use-case/use-case-base.js'

export interface IRegionDeleteRequest extends IUseCaseDeleteRequest<number> {

}

class RegionDeleteRequest extends UseCase.UseCaseDeleteRequest<number> {
    constructor(readonly id : number) {
        super(id)
    }
}

class RegionDeleteResponse extends UseCase.UseCaseResponse {
    constructor(readonly resultCode: number) {
        super(resultCode)
    }
}

export default {
    RegionDeleteRequest,
    RegionDeleteResponse
}