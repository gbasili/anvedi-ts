'use strict'
const schemaRegionCreate = {
    body: {
        type: 'object',
        required: ['Code', 'Name'],
        properties: {
            Code: { type: 'string', 'maxLength': 4 },
        },
        additionalProperties: false
    }
};

const schemaRegionRead = {
    params: {
        type: 'object',
        required: ['id'],
        properties: {
            id: { type: 'integer' }
        },
        additionalProperties: false
    }
}

const schemaRegionReadAll = {
    body: {
        type: 'object',
        required: [],
        properties: {
            q: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        f: { type: "string" },
                        o: { type: "string" },
                        v: { type: "string" },
                        t: { type: "string" },
                    },
                    required: [ "f", "o", "v", "t" ]
                }
            },
            s: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        f: { type: "string" },
                        a: { type: "boolean" }
                    },
                    required: ["f", "a"]
                }
            }, 
            p: {
                type: "object",
                required: ["l", "o"],
                properties: {
                    l: { type: "integer" },
                    o: { type: "integer" },
                },
                additionalProperties: false
            },
            i: {
                type: "array",
                items: { type: "string" }
            },
            l: {
                type: "array",
                items: { type: "string" }
            }
        },
        additionalProperties: false
    }
}

const schemaRegionUpdate = {
    body: {
        type: 'object',
        required: ['Id', 'Code', 'Name'],
        properties: {
            Id: { type: 'integer', 'minimum': 1 },
            Code: { type: 'string', 'maxLength': 4 },
        },
        additionalProperties: false
    }
}

const schemaRegionDelete = {
    params: {
        type: 'object',
        required: ['id'],
        properties: {
            id: { type: 'integer' }
        },
        additionalProperties: false
    }
}

export default {
    schemaRegionCreate,
    schemaRegionRead,
    schemaRegionReadAll,
    schemaRegionUpdate,
    schemaRegionDelete
}
