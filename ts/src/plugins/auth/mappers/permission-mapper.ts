'use strict'
import PermissionDTO from '../dto/permission'
import { Permission } from '../entities/permission';

class PermissionMapper {

    static ToEntity(dto: PermissionDTO, entity: any) {
        entity.Code = dto.Code;
        entity.Name = dto.Name;
    }

    static ToDto(entities: any): PermissionDTO {
        return new PermissionDTO(entities.Id, entities.Code, entities.Name)
    }

    static ToDtos(entities: any[]): PermissionDTO[] {
        let items = [];
        for(let i = 0; i < entities.length; i++){
            const entity = entities[i];
            items.push(PermissionMapper.ToDto(entity))
        }
        return items;
    }
}

export default { PermissionMapper }