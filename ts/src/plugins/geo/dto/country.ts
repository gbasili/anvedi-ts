'use strict'
import BaseDTO from '../../anvedi/domain/dto/base-dto'

class CountryDTO extends BaseDTO<number> {
    
    constructor(public Id: number, public Code: string, public IsoCode2: string, public Name: string, public Region?: any, public States?: any[] | null) {
        super(Id)
    }
}

export default CountryDTO