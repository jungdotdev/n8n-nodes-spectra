"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectListDescription = void 0;
const showOnlyForProjectList = {
    operation: ['list'],
    resource: ['project'],
};
exports.projectListDescription = [
    {
        displayName: 'Team ID',
        name: 'teamId',
        type: 'string',
        default: '',
        displayOptions: { show: showOnlyForProjectList },
        description: 'Optional team ID to filter projects',
        routing: {
            send: {
                preSend: [
                    async function (requestOptions) {
                        var _a;
                        const teamId = this.getNodeParameter('teamId');
                        if (teamId) {
                            (_a = requestOptions.qs) !== null && _a !== void 0 ? _a : (requestOptions.qs = {});
                            requestOptions.qs.teamId = teamId;
                        }
                        return requestOptions;
                    },
                ],
            },
        },
    },
];
//# sourceMappingURL=list.js.map