'use strict'

import { Permission } from "./entities/permission";

export interface IAuthContext {
    permissions: typeof Permission
    transaction: any
    
    beginTransaction(): any
    commit(): void
    rollback(): void
}