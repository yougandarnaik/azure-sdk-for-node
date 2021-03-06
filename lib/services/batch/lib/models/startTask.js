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
 * Initializes a new instance of the StartTask class.
 * @constructor
 * @summary A task which is run when a compute node joins a pool in the Azure
 * Batch service, or when the compute node is rebooted or reimaged.
 *
 * @member {string} commandLine The command line of the start task. The command
 * line does not run under a shell, and therefore cannot take advantage of
 * shell features such as environment variable expansion. If you want to take
 * advantage of such features, you should invoke the shell in the command line,
 * for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in
 * Linux.
 *
 * @member {array} [resourceFiles] A list of files that the Batch service will
 * download to the compute node before running the command line.
 *
 * @member {array} [environmentSettings] A list of environment variable
 * settings for the start task.
 *
 * @member {object} [userIdentity] The user identity under which the start task
 * runs. If omitted, the task runs as a non-administrative user unique to the
 * task.
 *
 * @member {string} [userIdentity.userName] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 *
 * @member {object} [userIdentity.autoUser] The userName and autoUser
 * properties are mutually exclusive; you must specify one but not both.
 *
 * @member {string} [userIdentity.autoUser.scope] pool - specifies that the
 * task runs as the common auto user account which is created on every node in
 * a pool. task - specifies that the service should create a new user for the
 * task. The default value is task. Possible values include: 'task', 'pool'
 *
 * @member {string} [userIdentity.autoUser.elevationLevel] nonAdmin - The auto
 * user is a standard user without elevated access. admin - The auto user is a
 * user with elevated access and operates with full Administrator permissions.
 * The default value is nonAdmin. Possible values include: 'nonAdmin', 'admin'
 *
 * @member {number} [maxTaskRetryCount] The maximum number of times the task
 * may be retried. The Batch service retries a task if its exit code is
 * nonzero. Note that this value specifically controls the number of retries.
 * The Batch service will try the task once, and may then retry up to this
 * limit. For example, if the maximum retry count is 3, Batch tries the task up
 * to 4 times (one initial try and 3 retries). If the maximum retry count is 0,
 * the Batch service does not retry the task. If the maximum retry count is -1,
 * the Batch service retries the task without limit.
 *
 * @member {boolean} [waitForSuccess] Whether the Batch service should wait for
 * the start task to complete successfully (that is, to exit with exit code 0)
 * before scheduling any tasks on the compute node. If true and the start task
 * fails on a compute node, the Batch service retries the start task up to its
 * maximum retry count (maxTaskRetryCount). If the task has still not completed
 * successfully after all retries, then the Batch service marks the compute
 * node unusable, and will not schedule tasks to it. This condition can be
 * detected via the node state and scheduling error detail. If false, the Batch
 * service will not wait for the start task to complete. In this case, other
 * tasks can start executing on the compute node while the start task is still
 * running; and even if the start task fails, new tasks will continue to be
 * scheduled on the node. The default is false.
 *
 */
function StartTask() {
}

/**
 * Defines the metadata of StartTask
 *
 * @returns {object} metadata of StartTask
 *
 */
StartTask.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'StartTask',
    type: {
      name: 'Composite',
      className: 'StartTask',
      modelProperties: {
        commandLine: {
          required: true,
          serializedName: 'commandLine',
          type: {
            name: 'String'
          }
        },
        resourceFiles: {
          required: false,
          serializedName: 'resourceFiles',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ResourceFileElementType',
                type: {
                  name: 'Composite',
                  className: 'ResourceFile'
                }
            }
          }
        },
        environmentSettings: {
          required: false,
          serializedName: 'environmentSettings',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'EnvironmentSettingElementType',
                type: {
                  name: 'Composite',
                  className: 'EnvironmentSetting'
                }
            }
          }
        },
        userIdentity: {
          required: false,
          serializedName: 'userIdentity',
          type: {
            name: 'Composite',
            className: 'UserIdentity'
          }
        },
        maxTaskRetryCount: {
          required: false,
          serializedName: 'maxTaskRetryCount',
          type: {
            name: 'Number'
          }
        },
        waitForSuccess: {
          required: false,
          serializedName: 'waitForSuccess',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = StartTask;
