'use strict'
import { IPermissionQueryService } from "./i-permission-service";
import { IPermissionReadOneRequest, IPermissionReadAllRequest } from "../use-case/permission-read";
import UC from '../use-case/index'
import K from '../../anvedi/constants'
import { IAuthContext } from "../i-auth-context";
import Mapper from '../mappers/permission-mapper'
import QueryHelper from '../../anvedi/data/sequelize/query-helper'

export class PermissionQueryService implements IPermissionQueryService {
    readonly authContext: IAuthContext
    
    constructor(authContext: IAuthContext){
        this.authContext = authContext
    }

    async ReadOne(useCase: IPermissionReadOneRequest): Promise<any> {
        try {
            const entity = await this.authContext.permissions.findByPk(useCase.id);
            if (entity == null){
                return new UC.Read.PermissionReadOneResponse(null, K.ResulCode.NOT_FOUND) 
            }
            const dto = Mapper.PermissionMapper.ToDto(entity)
            return new UC.Read.PermissionReadOneResponse(dto, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            return new UC.Read.PermissionReadOneResponse(null, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async ReadAll(useCase: IPermissionReadAllRequest): Promise<any> {
        try {
            const where = QueryHelper.GetWhere(useCase.queryAtoms);
            const options = QueryHelper.GetOptions(where, useCase.queryAtoms, useCase.sortingAtoms, useCase.pager, useCase.includeAtoms, useCase.loadAtoms);
            const entities = await this.authContext.permissions.findAll(options);
            const permissions = Mapper.PermissionMapper.ToDtos(entities)
            const total = await this.authContext.permissions.count({ where: where });
            return new UC.Read.PermissionReadAllResponse(permissions, total, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            return new UC.Read.PermissionReadAllResponse(null, 0, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }
}