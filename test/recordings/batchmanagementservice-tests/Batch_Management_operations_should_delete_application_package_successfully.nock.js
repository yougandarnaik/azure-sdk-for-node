// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'jsjapaneast';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0?api-version=2017-01-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'request-id': '95479094-54a9-4de6-8aeb-6a25fd3ef0ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': '744230ef-de7b-491b-96e7-da6a7d3b55a4',
  'x-ms-correlation-request-id': '744230ef-de7b-491b-96e7-da6a7d3b55a4',
  'x-ms-routing-request-id': 'CENTRALUS:20170218T000651Z:744230ef-de7b-491b-96e7-da6a7d3b55a4',
  date: 'Sat, 18 Feb 2017 00:06:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0?api-version=2017-01-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'request-id': '95479094-54a9-4de6-8aeb-6a25fd3ef0ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': '744230ef-de7b-491b-96e7-da6a7d3b55a4',
  'x-ms-correlation-request-id': '744230ef-de7b-491b-96e7-da6a7d3b55a4',
  'x-ms-routing-request-id': 'CENTRALUS:20170218T000651Z:744230ef-de7b-491b-96e7-da6a7d3b55a4',
  date: 'Sat, 18 Feb 2017 00:06:51 GMT',
  connection: 'close' });
 return result; }]];