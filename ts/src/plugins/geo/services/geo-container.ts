'use strict'

import { IGeoContext } from "../data/i-geo-context";
import { IRegionCommandService, IRegionQueryService } from "./i-geo-service";
import { RegionCommandService } from "./region-command-service";
import { RegionQueryService } from "./region-query-service";

export interface IGeoContainer {
    GetRegionCommandService(geoContext: IGeoContext) : IRegionCommandService
    GetRegionQueryService(geoContext: IGeoContext) : IRegionQueryService
}

export class GeoContainer implements IGeoContainer {
    
    GetRegionCommandService(geoContext: IGeoContext) : IRegionCommandService
    {
        return new RegionCommandService(geoContext)
    }

    GetRegionQueryService(geoContext: IGeoContext) : IRegionQueryService
    {
        return new RegionQueryService(geoContext)
    }
    
}