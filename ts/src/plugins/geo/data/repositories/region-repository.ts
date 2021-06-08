'use strinct'
import { IRepository } from "../../../../infrastructure/data/i-repository";
import { SequelizeRepository } from "../../../../infrastructure/data/sequelize-repository";

export interface IRegionRepository extends IRepository<{}, number> {
    
}
  
export class RegionRepository extends SequelizeRepository<{}, number> implements IRegionRepository {
    
    constructor(sequelizeModel: any){
        super(sequelizeModel)
    }

}