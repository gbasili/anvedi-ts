'use strict'
import PermissionDTO from '../dto/permission'

class PermissionMapper {

    static ToEntity(dto: PermissionDTO, entity: any) {
        entity.Code = dto.Code;
        entity.Name = dto.Name;
    }

    static ToDto(model: any): PermissionDTO {
        return new PermissionDTO(model.Id, model.Code, model.Name)
    }

    static ToDtos(models: any[]): PermissionDTO[] {
        let items = [];
        for(let i = 0; i < models.length; i++){
            const entity = models[i];
            items.push(PermissionMapper.ToDto(entity))
        }
        return items;
    }
}

export default { PermissionMapper }