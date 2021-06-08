'use strict'
import { IPermissionCommandService } from "./i-permission-service";
import UC from '../use-case/index'
import PermissionDTO from '../dto/permission'
import { IAuthContext } from "../data/i-auth-context";
import { IPermissionCreateRequest } from "../use-case/permission-create";
import { IPermissionDeleteRequest } from "../use-case/permission-delete";
import { IPermissionUpdateRequest } from "../use-case/permission-update";
import K from '../../anvedi/constants'
import Mapper from '../mappers/permission-mapper'
import { Permission } from "../models/permission";
import { PermissionCreatedEvent } from "../events/permission-created-event";
import { DomainEventDispatcherSimple } from "../../anvedi/events/domain-event-dispatcher-simple";

export class PermissionCommandService implements IPermissionCommandService {
    readonly authContext: IAuthContext
    
    constructor(authContext: IAuthContext){
        this.authContext = authContext
    }

    async Create(useCase: IPermissionCreateRequest):  Promise<any> {
        try {
             const t = await this.authContext.beginTransaction()
             const permission: any = await this.authContext.permissionRepository.create(useCase.data, { transaction: t });
             useCase.data.Id = permission.Id
             this.authContext.commit()
             DomainEventDispatcherSimple.Dispatch(new PermissionCreatedEvent(permission))
             return new UC.Create.PermissionCreateResponse(useCase.data, K.ResulCode.OK)
        } catch(ex) {
             console.log(ex)
             this.authContext.rollback()
             return new UC.Create.PermissionCreateResponse(useCase.data, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async Delete(useCase: IPermissionDeleteRequest): Promise<any> {
        try {
            const t = await this.authContext.beginTransaction()
            var p = await this.authContext.permissionRepository.readById(useCase.id);
            if (p == null){
                return new UC.Delete.PermissionDeleteResponse(K.ResulCode.NOT_FOUND)
            }
            await p.destroy({ transaction: t })
            this.authContext.commit()
            return new UC.Delete.PermissionDeleteResponse(K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            this.authContext.rollback()
            return new UC.Delete.PermissionDeleteResponse(K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async Update(useCase: IPermissionUpdateRequest): Promise<any> {
        try {
            const t = await this.authContext.beginTransaction()
            var p = await this.authContext.permissionRepository.readById(useCase.data.Id);
            if (p == null){
                return new UC.Update.PermissionUpdateResponse(useCase.data, K.ResulCode.NOT_FOUND)
            }
            Mapper.PermissionMapper.ToEntity(useCase.data, p)
            await p.save({ transaction: t });
            this.authContext.commit()
            return new UC.Update.PermissionUpdateResponse(useCase.data, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            this.authContext.rollback()
            return new UC.Update.PermissionUpdateResponse(useCase.data, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

}