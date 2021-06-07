'use strict'

import { IAuthContext } from "../../plugins/auth/IAuthContext";
import { IPermissionCommandService, IPermissionQueryService } from "../../plugins/auth/services/IPermissionService";
import { PermissionCommandService } from "../../plugins/auth/services/PermissionCommandService";
import { PermissionQueryService } from "../../plugins/auth/services/PermissionQueryService";

export interface IContainer {
    GetPermissionCommandService(authContext: IAuthContext) : IPermissionCommandService
    GetPermissionQueryService(authContext: IAuthContext) : IPermissionQueryService
}

export class Container implements IContainer {
    
    GetPermissionCommandService(authContext: IAuthContext) : IPermissionCommandService
    {
        return new PermissionCommandService(authContext)
    }

    GetPermissionQueryService(authContext: IAuthContext) : IPermissionQueryService
    {
        return new PermissionQueryService(authContext)
    }
    
}