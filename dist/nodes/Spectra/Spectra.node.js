"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spectra = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const export_1 = require("./resources/export");
const project_1 = require("./resources/project");
class Spectra {
    constructor() {
        this.description = {
            displayName: 'spectra.fm',
            name: 'spectra',
            icon: { light: 'file:spectra.svg', dark: 'file:spectra.dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the spectra.fm API',
            defaults: {
                name: 'spectra.fm',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [{ name: 'spectraApi', required: true }],
            requestDefaults: {
                baseURL: 'https://api.spectra.fm/v1',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Project',
                            value: 'project',
                        },
                        {
                            name: 'Export',
                            value: 'export',
                        },
                    ],
                    default: 'project',
                },
                ...project_1.projectDescription,
                ...export_1.exportDescription,
            ],
        };
    }
}
exports.Spectra = Spectra;
//# sourceMappingURL=Spectra.node.js.map