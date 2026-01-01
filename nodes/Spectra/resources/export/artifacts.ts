import type { INodeProperties } from 'n8n-workflow';

const showOnlyForExportArtifacts = {
	operation: ['artifacts'],
	resource: ['export'],
};

export const exportArtifactsDescription: INodeProperties[] = [
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
