'use strict'
import RegionDTO from '../../plugins/geo/dto/region';
import UseCase from '../../plugins/geo/use-case/index'
import S from './geo-schema'

export async function rRegions (fastify: any, options: any) {
    // create
    fastify.post('/region', { schema: S.schemaRegionCreate },  async (request : any, reply : any) => {
        const useCase = new UseCase.Create.RegionCreateRequest(new RegionDTO(0, request.body.Code, request.body.Name))
        const regionCommandService = fastify.geoContainer.GetRegionCommandService(request.geoContext)
        return regionCommandService.Create(useCase);
    })

    // read
    fastify.get('/region/:id', { schema: S.schemaRegionRead },  async (request: any, reply: any) => {
        const useCase = new UseCase.Read.RegionReadOneRequest(request.params.id)
        const regionQueryService = fastify.geoContainer.GetRegionQueryService(request.geoContext)
        return regionQueryService.ReadOne(useCase)
    })
    
    // readAll
    fastify.post('/regions', { schema: S.schemaRegionReadAll },  async (request: any, reply: any) => {
        const useCase = new UseCase.Read.RegionReadAllRequest(request.body.q, request.body.s, request.body.p, request.body.i, request.body.l)
        const regionQueryService = fastify.geoContainer.GetRegionQueryService(request.geoContext)
        return regionQueryService.ReadAll(useCase)
    })

    // update
    fastify.put('/region', { schema: S.schemaRegionUpdate },  async (request: any, reply: any) => {
        const useCase = new UseCase.Update.RegionUpdateRequest(new RegionDTO(request.body.Id, request.body.Code, request.body.Name))
        const regionCommandService = fastify.geoContainer.GetRegionCommandService(request.geoContext)
        return regionCommandService.Update(useCase)
    })
    
    // delete
    fastify.delete('/region/:id', { schema: S.schemaRegionDelete },  async (request: any, reply: any) => {
        const useCase = new UseCase.Delete.RegionDeleteRequest(request.params.id)
        const regionCommandService = fastify.geoContainer.GetRegionCommandService(request.geoContext)
        return regionCommandService.Delete(useCase)
    })
}