import type { INodeProperties } from 'n8n-workflow';

const showOnlyForProjectList = {
	operation: ['list'],
	resource: ['project'],
};

export const projectListDescription: INodeProperties[] = [
	{
		displayName: 'Team ID',
		name: 'teamId',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForProjectList },
		description: 'Optional team ID to filter projects',
		routing: {
			send: {
				type: 'query',
				property: 'teamId',
			},
		},
	},
];
