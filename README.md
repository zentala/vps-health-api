# VPS Health Monitoring API [![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://github.com/emersion/stability-badges#stable)

Welcome to the VPS API Monitoring repository. This project is designed as a server-side solution for monitoring VPS resources, providing detailed data to integrate with Backstage.io for a comprehensive overview of both the server and its services.

## 🌐 Project Overview

The VPS API Monitoring tool offers a robust and efficient way to monitor your VPS resources. It is intended to run as a server-side process, delivering real-time data about system performance and service status for integration with the Backstage.io platform.

## 🚀 Features

- Real-time monitoring of VPS resources such as CPU, memory, and disk usage.
- Detailed service status tracking.
- Easy integration with Backstage.io for enhanced VPS management and oversight.

## 📊 Code Quality Status

[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=zentala_vps-health-api&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=zentala_vps-health-api)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=zentala_vps-health-api&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=zentala_vps-health-api)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=zentala_vps-health-api&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=zentala_vps-health-api)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=zentala_vps-health-api&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=zentala_vps-health-api)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=zentala_vps-health-api&metric=bugs)](https://sonarcloud.io/summary/new_code?id=zentala_vps-health-api)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=zentala_vps-health-api&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=zentala_vps-health-api)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=zentala_vps-health-api&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=zentala_vps-health-api)

## 📚 Technical Stack Overview

| Category    | Technology  |
| :---------- | :---------- |
| Environment | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white) &nbsp; ![npm](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white) |
| Backend     | ![NestJS](https://img.shields.io/badge/-NestJS-ea2845.svg?logo=nestjs) &nbsp; ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) |
| Code Quality | ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white) &nbsp; ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=black) |
| IDE         | ![Visual Studio Code](https://img.shields.io/badge/-VisualStudioCode-007ACC?logo=visualstudiocode&logoColor=white) |

## 🚀 Getting Started

### Prerequisites

- Node.js
- Access to a VPS for monitoring

### Installation

1. Clone the repository:

```bash
git clone https://github.com/zentala/vps-health-api.git
```

2. Navigate to the project directory:
```bash
cd vps-health-api
```

3. Install dependencies:
```bash
yarn install
```

4. Start the monitoring service:
```bash
yarn run start
```

### Integration with Backstage.io
1. Install the VPS API plugin in your Backstage instance.
2. Configure the plugin by setting the VPS API endpoint.
3. Monitor your VPS resources and services directly from Backstage.

## 🛠️ Development
### Running Tests
Run unit and integration tests with:

```bash
yarn run test
```

### Building
Build the project with:

```bash
yarn run build
```

## 📚 Versioning
We use [Semantic Versioning](https://semver.org/) for version management.

## 📝 License
This project is licensed under the BSD License - see the [LICENSE](./LICENSE.md) file for details.