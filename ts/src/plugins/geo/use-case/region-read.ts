'use strict'
import { QueryAtom } from '../../anvedi/domain/dto/query-info'
import UseCase from '../../anvedi/domain/use-case/use-case-base'
import { IUseCaseReadOneRequest, IUseCaseReadAllRequest } from '../../anvedi/domain/use-case/use-case-base'
import RegionDTO from '../dto/region'

export interface IRegionReadOneRequest extends IUseCaseReadOneRequest<number> {

}

class RegionReadOneRequest extends UseCase.UseCaseReadOneRequest<number> {
    constructor(readonly id: number) {
        super(id)
    }
}

class RegionReadOneResponse extends UseCase.UseCaseReadOneResponse<RegionDTO> {
    constructor(readonly data: RegionDTO | null, readonly resultCode: number) {
        super(data, resultCode)
    }
}

export interface IRegionReadAllRequest extends IUseCaseReadAllRequest {

}

class RegionReadAllRequest extends UseCase.UseCaseReadAllRequest {
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

class RegionReadAllResponse extends UseCase.UseCaseReadAllResponse<RegionDTO> {
    constructor
    (
        readonly data: RegionDTO[] | null, 
        readonly total: number, 
        readonly resultCode: number
    )
    {
        super(data, total, resultCode)
    }
}

export default {
    RegionReadAllRequest,
    RegionReadAllResponse,
    RegionReadOneRequest,
    RegionReadOneResponse,
}
