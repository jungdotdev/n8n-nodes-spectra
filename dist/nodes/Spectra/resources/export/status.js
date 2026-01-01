"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportStatusDescription = void 0;
const showOnlyForExportStatus = {
    operation: ['get'],
    resource: ['export'],
};
exports.exportStatusDescription = [
    {
        displayName: 'Project ID',
        name: 'projectId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: { show: showOnlyForExportStatus },
        description: 'The project ID for the export',
    },
    {
        displayName: 'Export ID',
        name: 'exportId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: { show: showOnlyForExportStatus },
        description: 'The export job ID to retrieve',
    },
];
//# sourceMappingURL=status.js.map