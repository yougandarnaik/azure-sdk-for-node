// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2017-01-01.4.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks\",\"value\":[\r\n    {\r\n      \"id\":\"HelloWorldNodeSDKTestTask\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask\",\"eTag\":\"0x8D44C7F3BA6BEA4\",\"creationTime\":\"2017-02-03T21:54:27.8193663Z\",\"lastModified\":\"2017-02-03T21:54:31.1423652Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-02-03T21:54:31.1423652Z\",\"previousState\":\"completed\",\"previousStateTransitionTime\":\"2017-02-03T21:54:30.6195373Z\",\"commandLine\":\"ping 127.0.0.1 -n 20\",\"userIdentity\":{\r\n        \"autoUser\":{\r\n          \"scope\":\"task\",\"elevationLevel\":\"nonadmin\"\r\n        }\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"HelloWorldNodeSDKTestTask2\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2\",\"eTag\":\"0x8D44C7F3CAEBE27\",\"creationTime\":\"2017-02-03T21:54:30.502132Z\",\"lastModified\":\"2017-02-03T21:54:32.8725031Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-02-03T21:54:30.502132Z\",\"commandLine\":\"cmd /c echo hello world\",\"userIdentity\":{\r\n        \"autoUser\":{\r\n          \"scope\":\"task\",\"elevationLevel\":\"nonadmin\"\r\n        }\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e45433bd-93e7-4f89-a1b4-089eaa25088f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2017-01-01.4.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks\",\"value\":[\r\n    {\r\n      \"id\":\"HelloWorldNodeSDKTestTask\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask\",\"eTag\":\"0x8D44C7F3BA6BEA4\",\"creationTime\":\"2017-02-03T21:54:27.8193663Z\",\"lastModified\":\"2017-02-03T21:54:31.1423652Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-02-03T21:54:31.1423652Z\",\"previousState\":\"completed\",\"previousStateTransitionTime\":\"2017-02-03T21:54:30.6195373Z\",\"commandLine\":\"ping 127.0.0.1 -n 20\",\"userIdentity\":{\r\n        \"autoUser\":{\r\n          \"scope\":\"task\",\"elevationLevel\":\"nonadmin\"\r\n        }\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"HelloWorldNodeSDKTestTask2\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2\",\"eTag\":\"0x8D44C7F3CAEBE27\",\"creationTime\":\"2017-02-03T21:54:30.502132Z\",\"lastModified\":\"2017-02-03T21:54:32.8725031Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-02-03T21:54:30.502132Z\",\"commandLine\":\"cmd /c echo hello world\",\"userIdentity\":{\r\n        \"autoUser\":{\r\n          \"scope\":\"task\",\"elevationLevel\":\"nonadmin\"\r\n        }\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e45433bd-93e7-4f89-a1b4-089eaa25088f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:32 GMT',
  connection: 'close' });
 return result; }]];