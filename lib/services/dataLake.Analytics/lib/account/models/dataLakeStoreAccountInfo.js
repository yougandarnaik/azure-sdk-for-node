/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the DataLakeStoreAccountInfo class.
 * @constructor
 * Data Lake Store account information.
 *
 * @member {string} [suffix] the optional suffix for the Data Lake Store
 * account.
 *
 */
function DataLakeStoreAccountInfo() {
  DataLakeStoreAccountInfo['super_'].call(this);
}

util.inherits(DataLakeStoreAccountInfo, models['SubResource']);

/**
 * Defines the metadata of DataLakeStoreAccountInfo
 *
 * @returns {object} metadata of DataLakeStoreAccountInfo
 *
 */
DataLakeStoreAccountInfo.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DataLakeStoreAccountInfo',
    type: {
      name: 'Composite',
      className: 'DataLakeStoreAccountInfo',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        suffix: {
          required: false,
          serializedName: 'properties.suffix',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DataLakeStoreAccountInfo;
