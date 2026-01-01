"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpectraApi = void 0;
class SpectraApi {
    constructor() {
        this.name = 'spectraApi';
        this.displayName = 'spectra.fm API';
        this.icon = { light: 'file:../nodes/Spectra/spectra.svg', dark: 'file:../nodes/Spectra/spectra.dark.svg' };
        this.documentationUrl = 'https://spectra.fm/docs/integration/api';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'X-API-Key': '={{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://api.spectra.fm/v1',
                url: '/whoami',
            },
        };
    }
}
exports.SpectraApi = SpectraApi;
//# sourceMappingURL=SpectraApi.credentials.js.map