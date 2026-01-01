"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectGetDescription = void 0;
const showOnlyForProjectGet = {
    operation: ['get'],
    resource: ['project'],
};
exports.projectGetDescription = [
    {
        displayName: 'Project ID',
        name: 'projectId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: { show: showOnlyForProjectGet },
        description: 'The ID of the project to retrieve',
    },
];
//# sourceMappingURL=get.js.map