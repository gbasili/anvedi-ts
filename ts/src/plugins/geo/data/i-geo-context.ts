'use strict'
import { City } from "../models/city";
import { Country } from "../models/country";
import { Region } from "../models/region";
import { State } from "../models/state";

import { ICityRepository } from "./repositories/city-repository";
import { ICountryRepository } from "./repositories/country-repository";
import { IRegionRepository } from "./repositories/region-repository";
import { IStateRepository } from "./repositories/state-repository";

export interface IGeoContext {
    cityRepository: ICityRepository
    countryRepository: ICountryRepository
    regionRepository: IRegionRepository
    stateRepository: IStateRepository
    transaction: any
    
    beginTransaction(): any
    commit(): void
    rollback(): void
}