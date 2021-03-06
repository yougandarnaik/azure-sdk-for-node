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

/**
 * @class
 * Initializes a new instance of the KeyVaultReference class.
 * @constructor
 * Identifies the Azure key vault associated with a Batch account.
 *
 * @member {string} id The resource ID of the Azure key vault associated with
 * the Batch account.
 *
 * @member {string} url The Url of the Azure key vault associated with the
 * Batch account.
 *
 */
function KeyVaultReference() {
}

/**
 * Defines the metadata of KeyVaultReference
 *
 * @returns {object} metadata of KeyVaultReference
 *
 */
KeyVaultReference.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'KeyVaultReference',
    type: {
      name: 'Composite',
      className: 'KeyVaultReference',
      modelProperties: {
        id: {
          required: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        url: {
          required: true,
          serializedName: 'url',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = KeyVaultReference;
