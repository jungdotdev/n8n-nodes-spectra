"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportArtifactsDescription = void 0;
const showOnlyForExportArtifacts = {
    operation: ['artifacts'],
    resource: ['export'],
};
exports.exportArtifactsDescription = [
    {
        displayName: 'Project ID',
        name: 'projectId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: { show: showOnlyForExportArtifacts },
        description: 'The project ID for the export',
    },
    {
        displayName: 'Export ID',
        name: 'exportId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: { show: showOnlyForExportArtifacts },
        description: 'The export job ID to list artifacts for',
    },
];
//# sourceMappingURL=artifacts.js.map