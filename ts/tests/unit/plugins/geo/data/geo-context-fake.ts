'use strict'
import { IGeoContext } from "../../../../../src/plugins/geo/data/i-geo-context";
import { ICityRepository } from "../../../../../src/plugins/geo/data/repositories/city-repository";
import { IStateRepository } from "../../../../../src/plugins/geo/data/repositories/state-repository";
import { ICountryRepository } from "../../../../../src/plugins/geo/data/repositories/country-repository";
import { IRegionRepository } from "../../../../../src/plugins/geo/data/repositories/region-repository";
import { FakeRepository } from "../../anvedi/data/repository/permission-fake-repository";

export class GeoContextFake implements IGeoContext{
    readonly cityRepository: ICityRepository
    readonly stateRepository: IStateRepository
    readonly countryRepository: ICountryRepository
    readonly regionRepository: IRegionRepository
    
    constructor() {
        this.cityRepository = new FakeRepository();
        this.stateRepository = new FakeRepository();
        this.countryRepository = new FakeRepository();
        this.regionRepository = new FakeRepository();
    }
    
    transaction: any;
    beginTransaction() {
        return {}
    }
    commit(): void {
        console.log('commit');
    }
    rollback(): void {
        console.log('rollback');
    }

}