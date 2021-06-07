'use strict'

import { Permission } from "../../../src/plugins/auth/entities/permission";
import { IAuthContext } from "../../../src/plugins/auth/IAuthContext";

class AuthContextFake implements IAuthContext{
    permissions: typeof Permission;
    
    constructor(permission: typeof Permission) {
        this.permissions = permission
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