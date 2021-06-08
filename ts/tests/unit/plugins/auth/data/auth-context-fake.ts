'use strict'

import { IAuthContext } from "../../../../../src/plugins/auth/data/i-auth-context";
import { IPermissionRepository } from "../../../../../src/plugins/auth/data/repositories/permission-repository";
import { PermissionFakeRepository } from "./repository/permission-fake-repository";

export class AuthContextFake implements IAuthContext{
    readonly permissionRepository: IPermissionRepository
    
    constructor() {
        this.permissionRepository = new PermissionFakeRepository();
    }
    
    transaction: any;
    beginTransaction() {
        return {}
    }
    commit(): void {
        console.log('commit');
    }
    rollback(): void {
        console.log('rollback');
    }

}