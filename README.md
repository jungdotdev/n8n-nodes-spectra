# n8n-nodes-spectra

This is an n8n community node for spectra.fm. It lets you trigger exports, poll status, list artifacts, and download files in your workflows.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- Project
  - List
  - Get
- Export
  - Create
  - Get Status
  - List
  - Options
  - List Artifacts
  - Download

## Credentials

Create an API key at [app.spectra.fm/settings/api-keys](https://app.spectra.fm/settings/api-keys). Use the key in the **spectra.fm API** credentials. This node authenticates via the `X-API-Key` header.

## Compatibility

Tested with n8n 1.x community nodes.

## Usage

A typical export flow is:

1. **Export → Options** (optional) to discover locales/themes
2. **Export → Create** to start a job
3. **Export → Get Status** to poll until `status` is `completed`
4. **Export → List Artifacts** to fetch download URLs
5. **Export → Download** to fetch the file

## Resources

- [spectra.fm API docs](https://api.spectra.fm/docs)
- [spectra.fm API integration guide](https://spectra.fm/docs/integration/api)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
