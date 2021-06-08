'use strict'

import { Permission } from "../entities/permission";
import { IPermissionRepository } from "./repositories/permission-repository";

export interface IAuthContext {
    permissionRepository: IPermissionRepository
    transaction: any
    
    beginTransaction(): any
    commit(): void
    rollback(): void
}