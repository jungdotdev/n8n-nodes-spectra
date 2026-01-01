import type { INodeProperties } from 'n8n-workflow';

const showOnlyForProjectGet = {
	operation: ['get'],
	resource: ['project'],
};

export const projectGetDescription: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForProjectGet },
		description: 'The ID of the project to retrieve',
	},
];
