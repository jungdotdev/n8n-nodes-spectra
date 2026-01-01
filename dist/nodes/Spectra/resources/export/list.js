"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportListDescription = void 0;
const showOnlyForExportList = {
    operation: ['list'],
    resource: ['export'],
};
exports.exportListDescription = [
    {
        displayName: 'Project ID',
        name: 'projectId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: { show: showOnlyForExportList },
        description: 'The project to list exports for',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        typeOptions: {
            minValue: 1,
            maxValue: 100,
        },
        default: 50,
        displayOptions: { show: showOnlyForExportList },
        description: 'Max number of results to return',
        routing: {
            send: {
                type: 'query',
                property: 'limit',
            },
        },
    },
];
//# sourceMappingURL=list.js.map