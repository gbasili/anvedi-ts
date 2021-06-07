'use strict'
import BaseDTO from '../../anvedi/domain/dto/base-dto'

class PermissionDTO extends BaseDTO<number> {
    
    constructor(public Id: number, public Code: string, public Name: string) {
        super(Id)
    }
}

export default PermissionDTO