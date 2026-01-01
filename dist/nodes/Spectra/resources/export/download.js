"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportDownloadDescription = void 0;
const showOnlyForExportDownload = {
    operation: ['download'],
    resource: ['export'],
};
exports.exportDownloadDescription = [
    {
        displayName: 'Project ID',
        name: 'projectId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: { show: showOnlyForExportDownload },
        description: 'The project ID for the export',
    },
    {
        displayName: 'Object Key',
        name: 'objectKey',
        type: 'string',
        default: '',
        required: true,
        displayOptions: { show: showOnlyForExportDownload },
        description: 'R2 object key returned by export status or artifacts',
        routing: {
            send: {
                type: 'query',
                property: 'objectKey',
            },
        },
    },
    {
        displayName: 'Filename',
        name: 'filename',
        type: 'string',
        default: '',
        displayOptions: { show: showOnlyForExportDownload },
        description: 'Optional filename override for the download',
        routing: {
            send: {
                type: 'query',
                property: 'filename',
            },
        },
    },
    {
        displayName: 'Binary Property',
        name: 'binaryPropertyName',
        type: 'string',
        default: 'data',
        required: true,
        displayOptions: { show: showOnlyForExportDownload },
        description: 'Name of the binary property to write the file to',
        typeOptions: {
            binaryDataProperty: true,
        },
    },
];
//# sourceMappingURL=download.js.map