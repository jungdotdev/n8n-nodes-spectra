import type { INodeProperties } from 'n8n-workflow';

const showOnlyForExportList = {
	operation: ['list'],
	resource: ['export'],
};

export const exportListDescription: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForExportList },
		description: 'The project to list exports for',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		displayOptions: { show: showOnlyForExportList },
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
];
