'use strict'
import UseCase from '../../anvedi/domain/use-case/use-case-base'
import { IUseCaseUpdateRequest } from '../../anvedi/domain/use-case/use-case-base'
import PermissionDTO from '../dto/permission'

export interface IPermissionUpdateRequest extends IUseCaseUpdateRequest<PermissionDTO> {

}

class PermissionUpdateRequest extends UseCase.UseCaseUpdateRequest<PermissionDTO> {
    constructor(readonly permission: PermissionDTO) {
        super(permission)
    }
}

class PermissionUpdateResponse extends UseCase.UseCaseUpdateResponse<PermissionDTO> {
    constructor(readonly data: PermissionDTO, readonly resultCode: number) {
        super(data, resultCode)
    }
}

export default {
    PermissionUpdateRequest,
    PermissionUpdateResponse
}
