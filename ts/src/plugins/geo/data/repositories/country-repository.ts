'use strinct'
import { IRepository } from "../../../../infrastructure/data/i-repository";
import { SequelizeRepository } from "../../../../infrastructure/data/sequelize-repository";

export interface ICountryRepository extends IRepository<{}, number> {
    
}
  
export class CountryRepository extends SequelizeRepository<{}, number> implements ICountryRepository {
    
    constructor(sequelizeModel: any){
        super(sequelizeModel)
    }

}