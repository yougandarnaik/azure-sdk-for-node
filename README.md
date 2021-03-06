# Azure SDK for Node.js

[![NPM version](https://badge.fury.io/js/azure.png)](http://badge.fury.io/js/azure) [![Build Status](https://travis-ci.org/Azure/azure-sdk-for-node.png?branch=master)](https://travis-ci.org/Azure/azure-sdk-for-node)

This project provides a Node.js package that makes it easy to consume and manage
Microsoft Azure Services.

## Usage

_This module includes all of the individual Azure Node.js modules in a single
place. If your application only needs access to specific management modules, see
[the list of individual modules](https://github.com/Azure/azure-sdk-for-node#install-individual-modules)
below._

```shell
$ npm install azure
```

This will allow you access to some helper methods as well as all of the
individual modules. For example, by installing the `azure` module, you can
directly require and use the `ms-rest-azure` common module. This organization
method allows for submodules (and peer dependant modules) to always be in sync
with each other.

**Note**: we haven't provided fine-grained modules for every supported Microsoft
Azure services yet. This will come soon. If there is a module that you find is
missing, [open an issue](https://github.com/Azure/azure-sdk-for-node/issues)
so that we may prioritize it in the backlog.

### Authenticating

There are three ways to authenticate using this module, use
[this guide](./Documentation/Authentication.md) to determine which method to use.

### Install individual modules

| **Azure Service** | **Install Command** |
| ----------------------------------------------------------------------------- | --------------------------- |
| [Gallery](http://azure.microsoft.com/en-us/marketplace/)                          | `npm install azure-gallery`       |
| [Graph](https://azure.microsoft.com/en-us/services/active-directory/)             | `npm install azure-graph`         |
| [Key Vault](http://azure.microsoft.com/en-us/services/key-vault/)                 | `npm install azure-keyvault`      |
| [Monitoring](https://msdn.microsoft.com/library/azure/dn306639.aspx)              | `npm install azure-monitoring`    |
| [Scheduler](http://azure.microsoft.com/en-us/services/scheduler/)                 | `npm install azure-scheduler`     |
| [Service Fabric](https://azure.microsoft.com/en-us/services/service-fabric/)      | `npm install azure-servicefabric` |
| [Service Bus](http://azure.microsoft.com/en-us/services/service-bus/)             | `npm install azure-sb`            |
| [Storage](http://azure.microsoft.com/en-us/services/storage/)                     | `npm install azure-storage`       |
| [Batch](https://azure.microsoft.com/en-us/services/batch/)                        | `npm install azure-batch`         |
| **Azure Resource Management (ARM)**                                                                                         |
| [Authorization](https://azure.microsoft.com/en-us/documentation/articles/role-based-access-control-configure/) | `npm install azure-arm-authorization`    |
| [Batch](https://azure.microsoft.com/en-us/services/batch/)                        | `npm install azure-arm-batch`     |
| [CDN](https://azure.microsoft.com/en-us/services/cdn/)                            | `npm install azure-arm-cdn`|
| [Commerce/Billing/Usage](https://azure.microsoft.com/en-us/documentation/articles/billing-usage-rate-card-overview/)                            | `npm install azure-arm-commerce`|
| [Compute](http://azure.microsoft.com/en-us/services/virtual-machines/)            | `npm install azure-arm-compute`|
| [Datalake Analytics](https://azure.microsoft.com/en-us/services/data-lake-analytics/) | `azure-arm-datalake-analytics`       |
| [Datalake Storage](https://azure.microsoft.com/en-us/services/data-lake-store/)   | `azure-arm-datalake-storage`       |
| [DNS](http://azure.microsoft.com/en-us/services/dns/)                             | `npm install azure-arm-dns`       |
| [DevTest Labs](https://azure.microsoft.com/en-us/services/devtest-lab/)           | `npm install azure-arm-devtestlabs`       |
| [EventHubs](https://azure.microsoft.com/en-us/services/event-hubs/)               | `azure-arm-eventhub`  |
| [HDInsight](http://azure.microsoft.com/en-us/services/hdinsight/)                 | `npm install azure-arm-hdinsight` |
| [HDInsightJobs](https://msdn.microsoft.com/en-us/library/azure/mt613023.aspx)     | `azure-arm-hdinsight-jobs` |
| [Insights](https://msdn.microsoft.com/en-us/library/azure/dn931943.aspx)          | `npm install azure-arm-insights`  |
| [IotHub](https://azure.microsoft.com/en-us/documentation/services/iot-hub/)       | `npm install azure-arm-iothub`  |
| [Key Vault](http://azure.microsoft.com/en-us/services/key-vault/)                 | `npm install azure-arm-keyvault`  |
| [Notification Hubs](https://azure.microsoft.com/en-us/documentation/services/notification-hubs/)                 | `azure-arm-notificationhubs`  |
| [PowerBi Embedded](https://azure.microsoft.com/en-us/services/power-bi-embedded/) | `azure-arm-powerbiembedded`  |
| [Redis Cache](https://azure.microsoft.com/en-us/services/cache/)                  | `npm install azure-arm-rediscache`   |
| [Resource Manager](https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/)    | `npm install azure-arm-resource`  |
| [ServerManagement](https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/)    | `azure-arm-servermanagement`  |
| [Servicebus](https://msdn.microsoft.com/en-us/library/mt639375.aspx)    | `azure-arm-sb`  |
| [Storage](http://azure.microsoft.com/en-us/services/storage/)                     | `npm install azure-arm-storage`   |
| [Traffic Manager](http://azure.microsoft.com/en-us/services/traffic-manager/)     | `npm install azure-arm-trafficManager`|
| [Virtual Networks](http://azure.microsoft.com/en-us/services/virtual-network/)    | `npm install azure-arm-network`   |
| [WebApps (WebSites)](http://azure.microsoft.com/en-us/services/app-service/web/)  | `npm install azure-arm-website`   |
| **Azure Service Management (ASM)**                                                                                          |
| [Compute](http://azure.microsoft.com/en-us/services/virtual-machines/)            |  `npm install azure-asm-compute`  |
| [HDInsight](http://azure.microsoft.com/en-us/services/hdinsight/)                 | `npm install azure-asm-hdinsight` |
| [Service Bus](http://azure.microsoft.com/en-us/services/service-bus/)             | `npm install azure-asm-sb`        |
| [Service Manager](https://msdn.microsoft.com/en-us/library/azure/ee460799.aspx)   | `npm install azure-asm-mgmt`      |
| [Store](http://azure.microsoft.com/en-us/marketplace/)                            | `npm install azure-asm-store`     |
| [Scheduler](http://azure.microsoft.com/en-us/services/scheduler/)                 | `npm install azure-asm-scheduler` |
| [SQL Database](http://azure.microsoft.com/en-us/services/sql-database/)           | `npm install azure-asm-sql`       |
| [Storage](http://azure.microsoft.com/en-us/services/storage/)                     | `npm install azure-asm-storage`   |
| [Subscriptions](https://msdn.microsoft.com/en-us/library/azure/gg715315.aspx)     | `npm install azure-asm-subscription`|
| [Traffic Manager](http://azure.microsoft.com/en-us/services/traffic-manager/)     | `npm install azure-asm-trafficManager`  |
| [Virtual Networks](http://azure.microsoft.com/en-us/services/virtual-network/)    | `npm install azure-asm-network`   |
| [WebSites](http://azure.microsoft.com/en-us/services/app-service/web/)            | `npm install azure-asm-website`   |
| **Base Libraries**                                                                |                                   |
| Common Functionality (for ASM & ARM clients)                                      | `npm install azure-common`        |
| Common Functionality for ARM clients generated from Autorest (Generic)            | `npm install ms-rest`             |
| Common Functionality for ARM clients generated from Autorest (Azure)              | `npm install ms-rest-azure`       |

## Need Help?

* [Read the docs](http://azure.github.io/azure-sdk-for-node)
* [Open an issue in GitHub](http://github.com/azure/azure-sdk-for-node)
* [Microsoft Azure Forums on MSDN and Stack Overflow](http://go.microsoft.com/fwlink/?LinkId=234489)

## Related Projects

* [Azure CLI](http://github.com/azure/azure-xplat-cli)

## License

This project is licensed under MIT and Apache-2.0.
- "MIT" license is usually used for the client libraries generated using [Autorest](https://github.com/Azure/Autorest) that are targeting ARM (V2 version of Azure REST API). The license can be found in "LICENSE.MIT.txt" file in this repository.
- "Apache-2.0" license is usually used for the client libraries generated using an internal code generator that are targeting ASM (V1 version of Azure REST API). The license can be found in "LICENSE.Apache.txt" file in this repository.

## Contribute

* If you would like to become an active contributor to this project please follow the instructions provided in [Microsoft Azure Projects Contribution Guidelines](http://azure.github.io/guidelines/).

### Getting Started Developing
Want to get started hacking on the code, super! Follow the following instructions to get up and running. These
instructions expect you have Git and a supported version of Node installed.

1. Fork it
2. Git Clone your fork (`git clone {your repo}`)
3. Move into sdk directory (`cd azure-sdk-for-node`)
4. Install all dependencies (`npm install`)
5. Run the tests (`npm test`). You should see all tests passing.

### Contributing Code to the Project
You found something you'd like to change, great! Please submit a pull request and we'll do our best to work with you to
get your code included into the project.

1. Commit your changes (`git commit -am 'Add some feature'`)
2. Push to the branch (`git push origin my-new-feature`)
3. Create new Pull Request
