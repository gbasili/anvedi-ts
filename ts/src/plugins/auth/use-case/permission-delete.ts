'use strict'
import UseCase from '../../anvedi/domain/use-case/use-case-base.js'
import { IUseCaseDeleteRequest } from '../../anvedi/domain/use-case/use-case-base.js'

export interface IPermissionDeleteRequest extends IUseCaseDeleteRequest<number> {

}

class PermissionDeleteRequest extends UseCase.UseCaseDeleteRequest<number> {
    constructor(readonly id : number) {
        super(id)
    }
}

class PermissionDeleteResponse extends UseCase.UseCaseResponse {
    constructor(readonly resultCode: number) {
        super(resultCode)
    }
}

export default {
    PermissionDeleteRequest,
    PermissionDeleteResponse
}