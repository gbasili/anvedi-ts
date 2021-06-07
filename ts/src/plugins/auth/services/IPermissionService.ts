'use strict'
import { IQueryService } from '../../anvedi/services/IQueryService'
import { IPermissionCreateRequest } from '../use-case/permission-create'
import { IPermissionReadOneRequest, IPermissionReadAllRequest } from '../use-case/permission-read'
import { IPermissionUpdateRequest } from '../use-case/permission-update'
import { IPermissionDeleteRequest } from '../use-case/permission-delete'

interface IPermissionCommandService  {
    Create(useCase: IPermissionCreateRequest): Promise<any>
    Update(useCase: IPermissionUpdateRequest): Promise<any>
    Delete(useCase: IPermissionDeleteRequest): Promise<any>
}

interface IPermissionQueryService extends IQueryService {
    ReadOne(useCase: IPermissionReadOneRequest): Promise<any>
    ReadAll(useCase: IPermissionReadAllRequest): Promise<any>
}

export {
    IPermissionCommandService,
    IPermissionQueryService
}