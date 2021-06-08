'use strinct'
import { IRepository } from "../../../../infrastructure/data/i-repository";
import { SequelizeRepository } from "../../../../infrastructure/data/sequelize-repository";

export interface IPermissionRepository extends IRepository<{}, number> {
    
}
  
export class PermissionRepository extends SequelizeRepository<{}, number> implements IPermissionRepository {
    
    constructor(sequelizeModel: any){
        super(sequelizeModel)
    }

}