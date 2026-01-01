import type { INodeProperties } from 'n8n-workflow';
import { projectGetDescription } from './get';
import { projectListDescription } from './list';

const showOnlyForProjects = {
	resource: ['project'],
};

export const projectDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForProjects,
		},
		options: [
			{
				name: 'List',
				value: 'list',
				action: 'List projects',
				description: 'List projects accessible to the API key',
				routing: {
					request: {
						method: 'GET',
						url: '/projects',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'projects',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a project',
				description: 'Get a single project by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects/{{$parameter.projectId}}',
					},
				},
			},
		],
		default: 'list',
	},
	...projectListDescription,
	...projectGetDescription,
];
