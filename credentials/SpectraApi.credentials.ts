import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SpectraApi implements ICredentialType {
	name = 'spectraApi';

	displayName = 'spectra.fm API';

	icon: Icon = { light: 'file:../nodes/Spectra/spectra.svg', dark: 'file:../nodes/Spectra/spectra.dark.svg' };

	// Link to API key setup documentation
	documentationUrl = 'https://spectra.fm/docs/integration/api';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-Key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.spectra.fm/v1',
			url: '/whoami',
		},
	};
}
