'use strict'
import { IRegionQueryService } from "./i-geo-service";
import { IRegionReadOneRequest, IRegionReadAllRequest } from "../use-case/region-read";
import UC from '../use-case/index'
import K from '../../anvedi/constants'
import { IGeoContext } from "../data/i-geo-context";
import { RegionMapper } from '../mappers/region-mapper'
import QueryHelper from '../../anvedi/data/sequelize/query-helper'

export class RegionQueryService implements IRegionQueryService {
    readonly geoContext: IGeoContext
    
    constructor(geoContext: IGeoContext){
        this.geoContext = geoContext
    }

    async ReadOne(useCase: IRegionReadOneRequest): Promise<any> {
        try {
            const entity = await this.geoContext.regionRepository.readById(useCase.id);
            if (entity == null){
                return new UC.Read.RegionReadOneResponse(null, K.ResulCode.NOT_FOUND) 
            }
            const dto = RegionMapper.ToDto(entity)
            return new UC.Read.RegionReadOneResponse(dto, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            return new UC.Read.RegionReadOneResponse(null, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async ReadAll(useCase: IRegionReadAllRequest): Promise<any> {
        try {
            const where = QueryHelper.GetWhere(useCase.queryAtoms);
            const options = QueryHelper.GetOptions(where, useCase.queryAtoms, useCase.sortingAtoms, useCase.pager, useCase.loadAtoms, useCase.includeAtoms);
            const entities = await this.geoContext.regionRepository.readAll(options);
            const regions = RegionMapper.ToDtos(entities)
            const total = await this.geoContext.regionRepository.count({ where: where });
            return new UC.Read.RegionReadAllResponse(regions, total, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            return new UC.Read.RegionReadAllResponse(null, 0, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }
}