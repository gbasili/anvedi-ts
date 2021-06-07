'use strict'
import K from '../../constants'
import { QueryAtom } from '../dto/query-info'

class UseCaseRequest {
    constructor() {
    }
}

class UseCaseResponse {
    constructor(readonly resultCode: number) {
        this.resultCode = resultCode;
    }
}

export interface IUseCaseCreateRequest<T> {
    data: T
}

class UseCaseCreateRequest<T> extends UseCaseRequest {
    constructor(readonly data: T) {
        super()
        this.data = data
    }
}

class UseCaseCreateResponse<T> extends UseCaseResponse {
    constructor(readonly data: T, readonly resultCode: number) {
        super(resultCode)
        this.data = data
    }
}

export interface IUseCaseDeleteRequest<T> {
    id: T
}

class UseCaseDeleteRequest<T> extends UseCaseRequest {
    constructor(readonly id: T) {
        super()
        this.id = id
    }
}

class UseCaseDeleteResponse extends UseCaseResponse {
    constructor(readonly resultCode: number) {
        super(resultCode)
    }
}

export interface IUseCaseUpdateRequest<T> {
    data: T
}

class UseCaseUpdateRequest<T> extends UseCaseRequest {
    constructor(readonly data: T) {
        super()
        this.data = data
    }
}

class UseCaseUpdateResponse<T> extends UseCaseResponse {
    constructor(readonly data: T, readonly resultCode: number) {
        super(resultCode)
        this.data = data
    }
}

export interface IUseCaseReadOneRequest<T> {
    id: T
}

class UseCaseReadOneRequest<T> extends UseCaseRequest {
    constructor(readonly id: T) {
        super()
        this.id = id
    }
}

class UseCaseReadOneResponse<T> extends UseCaseResponse {
    constructor(readonly data: T  | null, readonly resultCode: number) {
        super(resultCode)
        this.data = data
    }
}


export interface IUseCaseReadAllRequest {
    queryAtoms: QueryAtom[]
    sortingAtoms: any
    pager: any
    includeAtoms: any
    loadAtoms: any
}

class UseCaseReadAllRequest extends UseCaseRequest {
    constructor(
        readonly queryAtoms: QueryAtom[], 
        readonly sortingAtoms: any, 
        readonly pager: any, 
        readonly includeAtoms: any, 
        readonly loadAtoms: any
    )
    {
        super()
        if (pager == null){
            pager = {}
        }
        this.queryAtoms = queryAtoms || []
        this.sortingAtoms = sortingAtoms || []
        this.pager = { limit: pager.l || K.Default.PagerLimit, offset: pager.o || 0 }
        this.includeAtoms = includeAtoms || []
        this.loadAtoms = loadAtoms || []
    }
}

class UseCaseReadAllResponse<T> extends UseCaseResponse {
    constructor(
        readonly data: T[] | null, 
        readonly total: number, 
        readonly resultCode: number
    )
    {
        super(resultCode)
        this.data = data
        this.total = total
    }
}

export default {
    UseCaseCreateRequest,
    UseCaseCreateResponse,
    UseCaseDeleteRequest,
    UseCaseDeleteResponse,
    UseCaseReadOneRequest,
    UseCaseReadOneResponse,
    UseCaseUpdateRequest,
    UseCaseUpdateResponse,
    UseCaseRequest,
    UseCaseReadAllRequest,
    UseCaseResponse,
    UseCaseReadAllResponse
}