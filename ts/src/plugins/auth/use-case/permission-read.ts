'use strict'
import { QueryAtom } from '../../anvedi/domain/dto/query-info'
import UseCase from '../../anvedi/domain/use-case/use-case-base'
import { IUseCaseReadOneRequest, IUseCaseReadAllRequest } from '../../anvedi/domain/use-case/use-case-base'
import PermissionDTO from '../dto/permission'

export interface IPermissionReadOneRequest extends IUseCaseReadOneRequest<number> {

}

class PermissionReadOneRequest extends UseCase.UseCaseReadOneRequest<number> {
    constructor(readonly id: number) {
        super(id)
    }
}

class PermissionReadOneResponse extends UseCase.UseCaseReadOneResponse<PermissionDTO> {
    constructor(readonly data: PermissionDTO | null, readonly resultCode: number) {
        super(data, resultCode)
    }
}

export interface IPermissionReadAllRequest extends IUseCaseReadAllRequest {

}

class PermissionReadAllRequest extends UseCase.UseCaseReadAllRequest {
    constructor(
        readonly queryAtoms: QueryAtom[], 
        readonly sortingAtoms: any, 
        readonly pager: any, 
        readonly includeAtoms: any, 
        readonly loadAtoms: any
    )
    {
        super(queryAtoms, sortingAtoms, pager, includeAtoms, loadAtoms)
    }
}

class PermissionReadAllResponse extends UseCase.UseCaseReadAllResponse<PermissionDTO> {
    constructor
    (
        readonly data: PermissionDTO[] | null, 
        readonly total: number, 
        readonly resultCode: number
    )
    {
        super(data, total, resultCode)
    }
}

export default {
    PermissionReadAllRequest,
    PermissionReadAllResponse,
    PermissionReadOneRequest,
    PermissionReadOneResponse,
}
