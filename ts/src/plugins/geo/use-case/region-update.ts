'use strict'
import UseCase from '../../anvedi/domain/use-case/use-case-base'
import { IUseCaseUpdateRequest } from '../../anvedi/domain/use-case/use-case-base'
import RegionDTO from '../dto/region'

export interface IRegionUpdateRequest extends IUseCaseUpdateRequest<RegionDTO> {

}

class RegionUpdateRequest extends UseCase.UseCaseUpdateRequest<RegionDTO> {
    constructor(readonly region: RegionDTO) {
        super(region)
    }
}

class RegionUpdateResponse extends UseCase.UseCaseUpdateResponse<RegionDTO> {
    constructor(readonly data: RegionDTO, readonly resultCode: number) {
        super(data, resultCode)
    }
}

export default {
    RegionUpdateRequest,
    RegionUpdateResponse
}
