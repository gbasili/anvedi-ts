'use strict'
import CityDTO from '../dto/city'
import { StateMapper } from './state-mapper';

export class CityMapper {

    static ToEntity(dto: CityDTO, entity: any) {
        entity.Code = dto.Code;
        entity.Name = dto.Name;
    }

    static ToDto(model: any): CityDTO | null{
        return model ? new CityDTO(model.Id, model.Code, model.Name, StateMapper.ToDto(model.State)) : null
    }

    static ToDtos(models: any[]): CityDTO[] | null {
        if (! models){
            return null
        }
        let items = [];
        for(let i = 0; i < models.length; i++){
            const entity = models[i];
            items.push(CityMapper.ToDto(entity))
        }
        return items as CityDTO[] | null;
    }
}