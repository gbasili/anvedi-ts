'use strict'
import { CityModel } from '../models/city'
import { CountryModel } from '../models/country'
import { RegionModel } from '../models/region'
import { StateModel } from '../models/state'
import { Sequelize } from "sequelize";
import SequelizeContext from "../../anvedi/data/sequelize/sequelize-context";
import { IGeoContext } from './i-geo-context';
import { ICityRepository, CityRepository } from './repositories/city-repository';
import { ICountryRepository, CountryRepository } from './repositories/country-repository';
import { IRegionRepository, RegionRepository } from './repositories/region-repository';
import { IStateRepository, StateRepository } from './repositories/state-repository';

export const GeoContextGetInstance = function(options: any) : IGeoContext {
    const sequelize = new Sequelize(
        options.db_anvedi_database, 
        options.db_anvedi_username, 
        options.db_anvedi_password, 
        {
            dialect: options.db_anvedi_dialect,
            dialectOptions: options.db_anvedi_dialect_options || {},
            storage: options.db_anvedi_storage, 
            logging: options.db_anvedi_logging
        }
    );
    return new GeoContext(sequelize)
}

class GeoContext extends SequelizeContext implements IGeoContext {
    readonly regionRepository: IRegionRepository
    readonly countryRepository: ICountryRepository
    readonly stateRepository: IStateRepository
    readonly cityRepository: ICityRepository
    
    constructor(sequelize: Sequelize) {
        super(sequelize)
        this.cityRepository = new CityRepository(CityModel(sequelize))
        this.stateRepository = new StateRepository(StateModel(sequelize))
        this.countryRepository = new CountryRepository(CountryModel(sequelize))
        this.regionRepository = new RegionRepository(RegionModel(sequelize))
        
    }
    
}