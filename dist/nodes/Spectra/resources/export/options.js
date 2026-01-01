"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportOptionsDescription = void 0;
const showOnlyForExportOptions = {
    operation: ['options'],
    resource: ['export'],
};
exports.exportOptionsDescription = [
    {
        displayName: 'Project ID',
        name: 'projectId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: { show: showOnlyForExportOptions },
        description: 'The project to fetch export options for',
    },
];
//# sourceMappingURL=options.js.map