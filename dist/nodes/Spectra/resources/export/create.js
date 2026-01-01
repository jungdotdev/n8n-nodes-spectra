"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportCreateDescription = void 0;
const showOnlyForExportCreate = {
    operation: ['create'],
    resource: ['export'],
};
exports.exportCreateDescription = [
    {
        displayName: 'Project ID',
        name: 'projectId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: { show: showOnlyForExportCreate },
        description: 'The project to export from',
    },
    {
        displayName: 'Combinations',
        name: 'combinations',
        type: 'collection',
        typeOptions: {
            multipleValues: true,
            multipleValueButtonText: 'Add Combination',
        },
        default: [],
        displayOptions: { show: showOnlyForExportCreate },
        options: [
            {
                displayName: 'Locale',
                name: 'locale',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Theme',
                name: 'theme',
                type: 'string',
                default: '',
            },
        ],
        description: 'Locale/theme pairs to export (leave empty for defaults)',
        routing: {
            send: {
                type: 'body',
                property: 'combinations',
                value: '={{(Array.isArray($value) ? $value : $value ? [$value] : []).filter((item) => item.locale || item.theme)}}',
            },
        },
    },
    {
        displayName: 'Content Variations',
        name: 'contentVariations',
        type: 'json',
        default: [],
        displayOptions: { show: showOnlyForExportCreate },
        description: 'Array of key/value maps for content variations',
        routing: {
            send: {
                type: 'body',
                property: 'contentVariations',
            },
        },
    },
    {
        displayName: 'Version',
        name: 'version',
        type: 'string',
        default: 'latest',
        displayOptions: { show: showOnlyForExportCreate },
        description: 'Snapshot version number or "latest"',
        routing: {
            send: {
                type: 'body',
                property: 'version',
                value: '={{$value === "" ? undefined : $value}}',
            },
        },
    },
];
//# sourceMappingURL=create.js.map