'use strict'
import { IRegionCommandService } from "./i-geo-service";
import UC from '../use-case/index'
import RegionDTO from '../dto/region'
import { IGeoContext } from "../data/i-geo-context";
import { IRegionCreateRequest } from "../use-case/region-create";
import { IRegionDeleteRequest } from "../use-case/region-delete";
import { IRegionUpdateRequest } from "../use-case/region-update";
import K from '../../anvedi/constants'
import { RegionMapper } from '../mappers/region-mapper'
import { Region } from "../models/region";
//import { RegionCreatedEvent } from "../events/region-created-event";
//import { DomainEventDispatcherSimple } from "../../anvedi/events/domain-event-dispatcher-simple";

export class RegionCommandService implements IRegionCommandService {
    readonly geoContext: IGeoContext
    
    constructor(geoContext: IGeoContext){
        this.geoContext = geoContext
    }

    async Create(useCase: IRegionCreateRequest):  Promise<any> {
        try {
             const t = await this.geoContext.beginTransaction()
             const region: any = await this.geoContext.regionRepository.create(useCase.data, { transaction: t });
             useCase.data.Id = region.Id
             this.geoContext.commit()
             //DomainEventDispatcherSimple.Dispatch(new RegionCreatedEvent(region))
             return new UC.Create.RegionCreateResponse(useCase.data, K.ResulCode.OK)
        } catch(ex) {
             console.log(ex)
             this.geoContext.rollback()
             return new UC.Create.RegionCreateResponse(useCase.data, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async Delete(useCase: IRegionDeleteRequest): Promise<any> {
        try {
            const t = await this.geoContext.beginTransaction()
            var p = await this.geoContext.regionRepository.readById(useCase.id);
            if (p == null){
                return new UC.Delete.RegionDeleteResponse(K.ResulCode.NOT_FOUND)
            }
            await p.destroy({ transaction: t })
            this.geoContext.commit()
            return new UC.Delete.RegionDeleteResponse(K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            this.geoContext.rollback()
            return new UC.Delete.RegionDeleteResponse(K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async Update(useCase: IRegionUpdateRequest): Promise<any> {
        try {
            const t = await this.geoContext.beginTransaction()
            var p = await this.geoContext.regionRepository.readById(useCase.data.Id);
            if (p == null){
                return new UC.Update.RegionUpdateResponse(useCase.data, K.ResulCode.NOT_FOUND)
            }
            RegionMapper.ToEntity(useCase.data, p)
            await p.save({ transaction: t });
            this.geoContext.commit()
            return new UC.Update.RegionUpdateResponse(useCase.data, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            this.geoContext.rollback()
            return new UC.Update.RegionUpdateResponse(useCase.data, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

}