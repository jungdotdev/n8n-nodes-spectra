import type { INodeProperties } from 'n8n-workflow';

const showOnlyForExportOptions = {
	operation: ['options'],
	resource: ['export'],
};

export const exportOptionsDescription: INodeProperties[] = [
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
