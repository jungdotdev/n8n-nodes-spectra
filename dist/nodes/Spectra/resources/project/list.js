"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectListDescription = void 0;
const showOnlyForProjectList = {
    operation: ['list'],
    resource: ['project'],
};
exports.projectListDescription = [
    {
        displayName: 'Team ID',
        name: 'teamId',
        type: 'string',
        default: '',
        displayOptions: { show: showOnlyForProjectList },
        description: 'Optional team ID to filter projects',
        routing: {
            send: {
                type: 'query',
                property: 'teamId',
            },
        },
    },
];
//# sourceMappingURL=list.js.map