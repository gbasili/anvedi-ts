'use strict'

import { IAuthContext } from "../../plugins/auth/i-auth-context";
import { IPermissionCommandService, IPermissionQueryService } from "../../plugins/auth/services/i-permission-service";
import { PermissionCommandService } from "../../plugins/auth/services/permission-command-service";
import { PermissionQueryService } from "../../plugins/auth/services/permission-query-service";

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