// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup7959/providers/Microsoft.Storage/storageAccounts?api-version=2016-12-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup7959/providers/Microsoft.Storage/storageAccounts/testacc1919\",\"kind\":\"BlobStorage\",\"location\":\"eastasia\",\"name\":\"testacc1919\",\"properties\":{\"accessTier\":\"Cool\",\"creationTime\":\"2017-01-22T06:05:59.6698487Z\",\"primaryEndpoints\":{\"blob\":\"https://testacc1919.blob.core.windows.net/\",\"table\":\"https://testacc1919.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"},{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup7959/providers/Microsoft.Storage/storageAccounts/testacc2044\",\"kind\":\"Storage\",\"location\":\"westus\",\"name\":\"testacc2044\",\"properties\":{\"creationTime\":\"2017-01-22T06:04:50.8584787Z\",\"primaryEndpoints\":{\"blob\":\"https://testacc2044.blob.core.windows.net/\",\"file\":\"https://testacc2044.file.core.windows.net/\",\"queue\":\"https://testacc2044.queue.core.windows.net/\",\"table\":\"https://testacc2044.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"type\":\"Microsoft.Storage/storageAccounts\"},{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup7959/providers/Microsoft.Storage/storageAccounts/testacc63\",\"kind\":\"Storage\",\"location\":\"eastus2euap\",\"name\":\"testacc63\",\"properties\":{\"creationTime\":\"2017-01-22T06:05:25.0839957Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-01-22T06:05:25.0839957Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-01-22T06:05:25.0839957Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://testacc63.blob.core.windows.net/\",\"file\":\"https://testacc63.file.core.windows.net/\",\"queue\":\"https://testacc63.queue.core.windows.net/\",\"table\":\"https://testacc63.table.core.windows.net/\"},\"primaryLocation\":\"eastus2euap\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2340',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd3648069-6ca3-4a2e-a2a6-1cbd617d5155',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'd3648069-6ca3-4a2e-a2a6-1cbd617d5155',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T060639Z:d3648069-6ca3-4a2e-a2a6-1cbd617d5155',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:06:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup7959/providers/Microsoft.Storage/storageAccounts?api-version=2016-12-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup7959/providers/Microsoft.Storage/storageAccounts/testacc1919\",\"kind\":\"BlobStorage\",\"location\":\"eastasia\",\"name\":\"testacc1919\",\"properties\":{\"accessTier\":\"Cool\",\"creationTime\":\"2017-01-22T06:05:59.6698487Z\",\"primaryEndpoints\":{\"blob\":\"https://testacc1919.blob.core.windows.net/\",\"table\":\"https://testacc1919.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"},{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup7959/providers/Microsoft.Storage/storageAccounts/testacc2044\",\"kind\":\"Storage\",\"location\":\"westus\",\"name\":\"testacc2044\",\"properties\":{\"creationTime\":\"2017-01-22T06:04:50.8584787Z\",\"primaryEndpoints\":{\"blob\":\"https://testacc2044.blob.core.windows.net/\",\"file\":\"https://testacc2044.file.core.windows.net/\",\"queue\":\"https://testacc2044.queue.core.windows.net/\",\"table\":\"https://testacc2044.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"type\":\"Microsoft.Storage/storageAccounts\"},{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup7959/providers/Microsoft.Storage/storageAccounts/testacc63\",\"kind\":\"Storage\",\"location\":\"eastus2euap\",\"name\":\"testacc63\",\"properties\":{\"creationTime\":\"2017-01-22T06:05:25.0839957Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-01-22T06:05:25.0839957Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-01-22T06:05:25.0839957Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://testacc63.blob.core.windows.net/\",\"file\":\"https://testacc63.file.core.windows.net/\",\"queue\":\"https://testacc63.queue.core.windows.net/\",\"table\":\"https://testacc63.table.core.windows.net/\"},\"primaryLocation\":\"eastus2euap\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2340',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd3648069-6ca3-4a2e-a2a6-1cbd617d5155',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'd3648069-6ca3-4a2e-a2a6-1cbd617d5155',
  'x-ms-routing-request-id': 'JAPANEAST:20170122T060639Z:d3648069-6ca3-4a2e-a2a6-1cbd617d5155',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 22 Jan 2017 06:06:38 GMT',
  connection: 'close' });
 return result; }]];