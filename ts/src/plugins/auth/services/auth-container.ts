'use strict'

import { IAuthContext } from "../data/i-auth-context";
import { IPermissionCommandService, IPermissionQueryService } from "./i-permission-service";
import { PermissionCommandService } from "./permission-command-service";
import { PermissionQueryService } from "./permission-query-service";

export interface IAuthContainer {
    GetPermissionCommandService(authContext: IAuthContext) : IPermissionCommandService
    GetPermissionQueryService(authContext: IAuthContext) : IPermissionQueryService
}

export class AuthContainer implements IAuthContainer {
    
    GetPermissionCommandService(authContext: IAuthContext) : IPermissionCommandService
    {
        return new PermissionCommandService(authContext)
    }

    GetPermissionQueryService(authContext: IAuthContext) : IPermissionQueryService
    {
        return new PermissionQueryService(authContext)
    }
    
}