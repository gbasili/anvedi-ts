'use strict'
import CountryDTO from '../dto/country'
import { RegionMapper } from './region-mapper';
import { StateMapper } from './state-mapper';

export class CountryMapper {

    static ToEntity(dto: CountryDTO, entity: any) {
        entity.Code = dto.Code;
        entity.Name = dto.Name;
    }

    static ToDto(model: any): CountryDTO | null {
        return model ? new CountryDTO(model.Id, model.Code, model.IsoCode2, model.Name, RegionMapper.ToDto(model.Region),  StateMapper.ToDtos(model.States)) : null
    }

    static ToDtos(models: any[]): CountryDTO[] | null{
        if (! models){
            return null
        }
        let items = [];
        for(let i = 0; i < models.length; i++){
            const entity = models[i];
            items.push(CountryMapper.ToDto(entity))
        }
        return items as CountryDTO[] | null;
    }
}