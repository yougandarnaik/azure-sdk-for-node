// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = '91d12660-3dec-467a-be2a-213b5544ddc0';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/eventHubEndpoints/events/ConsumerGroups?api-version=2016-02-03')
  .reply(200, "{\"value\":[\"$Default\"]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14935',
  'x-ms-request-id': '2aafcd25-2444-4414-b7a2-80f12dd4aede',
  'x-ms-correlation-request-id': '2aafcd25-2444-4414-b7a2-80f12dd4aede',
  'x-ms-routing-request-id': 'WESTUS:20160718T192206Z:2aafcd25-2444-4414-b7a2-80f12dd4aede',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Jul 2016 19:22:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/eventHubEndpoints/events/ConsumerGroups?api-version=2016-02-03')
  .reply(200, "{\"value\":[\"$Default\"]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14935',
  'x-ms-request-id': '2aafcd25-2444-4414-b7a2-80f12dd4aede',
  'x-ms-correlation-request-id': '2aafcd25-2444-4414-b7a2-80f12dd4aede',
  'x-ms-routing-request-id': 'WESTUS:20160718T192206Z:2aafcd25-2444-4414-b7a2-80f12dd4aede',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Jul 2016 19:22:06 GMT',
  connection: 'close' });
 return result; }]];