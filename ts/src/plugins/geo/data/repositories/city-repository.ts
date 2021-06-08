'use strinct'
import { IRepository } from "../../../../infrastructure/data/i-repository";
import { SequelizeRepository } from "../../../../infrastructure/data/sequelize-repository";

export interface ICityRepository extends IRepository<{}, number> {
    
}
  
export class CityRepository extends SequelizeRepository<{}, number> implements ICityRepository {
    
    constructor(sequelizeModel: any){
        super(sequelizeModel)
    }

}