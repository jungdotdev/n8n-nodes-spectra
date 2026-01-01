import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { exportDescription } from './resources/export';
import { projectDescription } from './resources/project';

export class Spectra implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'spectra.fm',
		name: 'spectra',
			icon: 'file:spectra-logo.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the spectra.fm API',
		defaults: {
			name: 'spectra.fm',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
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
			...projectDescription,
			...exportDescription,
		],
	};
}
