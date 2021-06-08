'use strict'
import UseCase from '../../anvedi/domain/use-case/use-case-base'
import { IUseCaseCreateRequest } from '../../anvedi/domain/use-case/use-case-base'
import RegionDTO from '../dto/region'

export interface IRegionCreateRequest extends IUseCaseCreateRequest<RegionDTO> {

}

class RegionCreateRequest extends UseCase.UseCaseCreateRequest<RegionDTO> {
    constructor(readonly region: RegionDTO) {
        super(region)
    }
}

class RegionCreateResponse extends UseCase.UseCaseCreateResponse<RegionDTO> {
    constructor(readonly data: RegionDTO, readonly resultCode: number) {
        super(data, resultCode)
    }
}

export default {
    RegionCreateRequest,
    RegionCreateResponse
}