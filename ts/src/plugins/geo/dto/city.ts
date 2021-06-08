'use strict'
import BaseDTO from '../../anvedi/domain/dto/base-dto'

class CityDTO extends BaseDTO<number> {
    
    constructor(public Id: number, public Code: string, public Name: string, public State?: any) {
        super(Id)
    }
}

export default CityDTO