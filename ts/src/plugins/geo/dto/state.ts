'use strict'
import BaseDTO from '../../anvedi/domain/dto/base-dto'

class StateDTO extends BaseDTO<number> {
    
    constructor(public Id: number, public Code: string, public Name: string, public Country?: any,  public Cities?: any[] | null) {
        super(Id)
    }
}

export default StateDTO