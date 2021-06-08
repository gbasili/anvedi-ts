'use strict'
//import { Container, IContainer } from '../../infrastructure/services/container';
import PermissionDTO from '../../plugins/auth/dto/permission';
import UseCase from '../../plugins/auth/use-case/index'
import S from './permission-schema'

export async function rPermissions (fastify: any, options: any) {
    // create
    fastify.post('/permission', { schema: S.schemaPermissionCreate },  async (request : any, reply : any) => {
        const useCase = new UseCase.Create.PermissionCreateRequest(new PermissionDTO(0, request.body.Code, request.body.Name))
        const permissionCommandService = fastify.authContainer.GetPermissionCommandService(request.authContext)
        return permissionCommandService.Create(useCase);
    })

    // read
    fastify.get('/permission/:id', { schema: S.schemaPermissionRead },  async (request: any, reply: any) => {
        const useCase = new UseCase.Read.PermissionReadOneRequest(request.params.id)
        const permissionQueryService = fastify.authContainer.GetPermissionQueryService(request.authContext)
        return permissionQueryService.ReadOne(useCase)
    })
    
    // readAll
    fastify.post('/permissions', { schema: S.schemaPermissionReadAll },  async (request: any, reply: any) => {
        const useCase = new UseCase.Read.PermissionReadAllRequest(request.body.q, request.body.s, request.body.p, request.body.i, request.body.l)
        const permissionQueryService = fastify.authContainer.GetPermissionQueryService(request.authContext)
        return permissionQueryService.ReadAll(useCase)
    })

    // update
    fastify.put('/permission', { schema: S.schemaPermissionUpdate },  async (request: any, reply: any) => {
        const useCase = new UseCase.Update.PermissionUpdateRequest(new PermissionDTO(request.body.Id, request.body.Code, request.body.Name))
        const permissionCommandService = fastify.authContainer.GetPermissionCommandService(request.authContext)
        return permissionCommandService.Update(useCase)
    })

    // delete
    fastify.delete('/permission/:id', { schema: S.schemaPermissionDelete },  async (request: any, reply: any) => {
        const useCase = new UseCase.Delete.PermissionDeleteRequest(request.params.id)
        const permissionCommandService = fastify.authContainer.GetPermissionCommandService(request.authContext)
        return permissionCommandService.Delete(useCase)
    })
}