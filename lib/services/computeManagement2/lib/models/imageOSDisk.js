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

/**
 * @class
 * Initializes a new instance of the ImageOSDisk class.
 * @constructor
 * Describes an Operating System disk.
 *
 * @member {string} osType The Operating System type. Possible values include:
 * 'Windows', 'Linux'
 *
 * @member {string} osState The OS State. Possible values include:
 * 'Generalized', 'Specialized'
 *
 * @member {object} [snapshot] The snapshot.
 *
 * @member {string} [snapshot.id] Resource Id
 *
 * @member {object} [managedDisk] The managedDisk.
 *
 * @member {string} [managedDisk.id] Resource Id
 *
 * @member {string} [blobUri] The Virtual Hard Disk.
 *
 * @member {string} [caching] The caching type. Possible values include:
 * 'None', 'ReadOnly', 'ReadWrite'
 *
 * @member {number} [diskSizeGB] The initial managed disk size in GB for blank
 * data disks, and the new desired size for existing OS and Data disks.
 *
 */
function ImageOSDisk() {
}

/**
 * Defines the metadata of ImageOSDisk
 *
 * @returns {object} metadata of ImageOSDisk
 *
 */
ImageOSDisk.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ImageOSDisk',
    type: {
      name: 'Composite',
      className: 'ImageOSDisk',
      modelProperties: {
        osType: {
          required: true,
          serializedName: 'osType',
          type: {
            name: 'Enum',
            allowedValues: [ 'Windows', 'Linux' ]
          }
        },
        osState: {
          required: true,
          serializedName: 'osState',
          type: {
            name: 'Enum',
            allowedValues: [ 'Generalized', 'Specialized' ]
          }
        },
        snapshot: {
          required: false,
          serializedName: 'snapshot',
          type: {
            name: 'Composite',
            className: 'SubResource'
          }
        },
        managedDisk: {
          required: false,
          serializedName: 'managedDisk',
          type: {
            name: 'Composite',
            className: 'SubResource'
          }
        },
        blobUri: {
          required: false,
          serializedName: 'blobUri',
          type: {
            name: 'String'
          }
        },
        caching: {
          required: false,
          serializedName: 'caching',
          type: {
            name: 'Enum',
            allowedValues: [ 'None', 'ReadOnly', 'ReadWrite' ]
          }
        },
        diskSizeGB: {
          required: false,
          serializedName: 'diskSizeGB',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = ImageOSDisk;