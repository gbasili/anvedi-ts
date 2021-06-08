'use strict'
import { IQueryService } from '../../anvedi/services/i-query-service'
import { IRegionCreateRequest } from '../use-case/region-create'
import { IRegionReadOneRequest, IRegionReadAllRequest } from '../use-case/region-read'
import { IRegionUpdateRequest } from '../use-case/region-update'
import { IRegionDeleteRequest } from '../use-case/region-delete'

interface IRegionCommandService  {
    Create(useCase: IRegionCreateRequest): Promise<any>
    Update(useCase: IRegionUpdateRequest): Promise<any>
    Delete(useCase: IRegionDeleteRequest): Promise<any>
}

interface IRegionQueryService extends IQueryService {
    ReadOne(useCase: IRegionReadOneRequest): Promise<any>
    ReadAll(useCase: IRegionReadAllRequest): Promise<any>
}

export {
    IRegionCommandService,
    IRegionQueryService
}