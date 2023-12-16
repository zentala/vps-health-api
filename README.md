# VPS API Monitoring [![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://github.com/emersion/stability-badges#stable)

Welcome to the VPS API Monitoring repository. This project is designed as a server-side solution for monitoring VPS resources, providing detailed data to integrate with Backstage.io for a comprehensive overview of both the server and its services.

## 🌐 Project Overview

The VPS API Monitoring tool offers a robust and efficient way to monitor your VPS resources. It is intended to run as a server-side process, delivering real-time data about system performance and service status for integration with the Backstage.io platform.

## 🚀 Features

- Real-time monitoring of VPS resources such as CPU, memory, and disk usage.
- Detailed service status tracking.
- Easy integration with Backstage.io for enhanced VPS management and oversight.

## 📊 Code Quality Status

[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=your_project_key&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=your_project_key)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=your_project_key&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=your_project_key)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=your_project_key&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=your_project_key)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=your_project_key&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=your_project_key)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=your_project_key&metric=bugs)](https://sonarcloud.io/summary/new_code?id=your_project_key)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=your_project_key&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=your_project_key)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=your_project_key&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=your_project_key)

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