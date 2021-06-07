'use strict'
import UseCase from '../../anvedi/domain/use-case/use-case-base'
import { IUseCaseCreateRequest } from '../../anvedi/domain/use-case/use-case-base'
import PermissionDTO from '../dto/permission'

export interface IPermissionCreateRequest extends IUseCaseCreateRequest<PermissionDTO> {

}

class PermissionCreateRequest extends UseCase.UseCaseCreateRequest<PermissionDTO> {
    constructor(readonly permission: PermissionDTO) {
        super(permission)
    }
}

class PermissionCreateResponse extends UseCase.UseCaseCreateResponse<PermissionDTO> {
    constructor(readonly data: PermissionDTO, readonly resultCode: number) {
        super(data, resultCode)
    }
}

export default {
    PermissionCreateRequest,
    PermissionCreateResponse
}