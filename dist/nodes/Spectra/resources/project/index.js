"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectDescription = void 0;
const get_1 = require("./get");
const list_1 = require("./list");
const showOnlyForProjects = {
    resource: ['project'],
};
exports.projectDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForProjects,
        },
        options: [
            {
                name: 'List',
                value: 'list',
                action: 'List projects',
                description: 'List projects accessible to the API key',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/projects',
                    },
                    output: {
                        postReceive: [
                            {
                                type: 'rootProperty',
                                properties: {
                                    property: 'projects',
                                },
                            },
                        ],
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a project',
                description: 'Get a single project by ID',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/projects/{{$parameter.projectId}}',
                    },
                },
            },
        ],
        default: 'list',
    },
    ...list_1.projectListDescription,
    ...get_1.projectGetDescription,
];
//# sourceMappingURL=index.js.map