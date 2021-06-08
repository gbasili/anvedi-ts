'use strict'
import RegionDTO from '../dto/region'
import { CountryMapper } from './country-mapper';

export class RegionMapper {

    static ToEntity(dto: RegionDTO, entity: any) {
        entity.Code = dto.Code;
    }

    static ToDto(model: any): RegionDTO | null {
        return model ? new RegionDTO(model.Id, model.Code, CountryMapper.ToDtos(model.Countries)) : null
    }

    static ToDtos(models: any[]): RegionDTO[] | null {
        if (! models){
            return null
        }
        let items = [] ;
        for(let i = 0; i < models.length; i++){
            const entity = models[i];
            items.push(RegionMapper.ToDto(entity))
        }
        return items as  RegionDTO[] | null;
    }
}