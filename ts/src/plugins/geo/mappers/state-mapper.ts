'use strict'
import StateDTO from '../dto/state'
import { CountryMapper } from './country-mapper';
import { CityMapper } from './city-mapper';

export class StateMapper {

    static ToEntity(dto: StateDTO, entity: any) {
        entity.Code = dto.Code;
        entity.Name = dto.Name;
    }

    static ToDto(model: any): StateDTO | null{
        return model ? new StateDTO(model.Id, model.Code, model.Name, CountryMapper.ToDto(model.Region), CityMapper.ToDtos(model.Cities)) : null
    }

    static ToDtos(models: any[]): StateDTO[] | null{
        if (! models){
            return null;
        }
        let items = [];
        for(let i = 0; i < models.length; i++){
            const entity = models[i];
            items.push(StateMapper.ToDto(entity))
        }
        return items as StateDTO[] | null;
    }
}