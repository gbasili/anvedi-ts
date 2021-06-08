'use strinct'
import { IRepository } from "../../../../infrastructure/data/i-repository";
import { SequelizeRepository } from "../../../../infrastructure/data/sequelize-repository";

export interface IStateRepository extends IRepository<{}, number> {
    
}
  
export class StateRepository extends SequelizeRepository<{}, number> implements IStateRepository {
    
    constructor(sequelizeModel: any){
        super(sequelizeModel)
    }

}