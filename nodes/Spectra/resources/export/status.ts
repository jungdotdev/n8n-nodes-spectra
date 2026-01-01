import type { INodeProperties } from 'n8n-workflow';

const showOnlyForExportStatus = {
	operation: ['get'],
	resource: ['export'],
};

export const exportStatusDescription: INodeProperties[] = [
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
