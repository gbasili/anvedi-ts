'use strict'
import BaseDTO from '../../anvedi/domain/dto/base-dto'

class RegionDTO extends BaseDTO<number> {
    
    constructor(public Id: number, public Code: string, public Countries: any[] | null) {
        super(Id)
    }
}

export default RegionDTO