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
 * Initializes a new instance of the Deployment class.
 * @constructor
 * Deployment operation parameters.
 *
 * @member {object} [properties] The deployment properties.
 * 
 * @member {object} [properties.template] The template content. You use this
 * element when you want to pass the template syntax directly in the request
 * rather than link to an existing template. It can be a JObject or
 * well-formed JSON string. Use either the templateLink property or the
 * template property, but not both.
 * 
 * @member {object} [properties.templateLink] The URI of the template. Use
 * either the templateLink property or the template property, but not both.
 * 
 * @member {string} [properties.templateLink.uri] The URI of the template to
 * deploy.
 * 
 * @member {string} [properties.templateLink.contentVersion] If included, must
 * match the ContentVersion in the template.
 * 
 * @member {object} [properties.parameters] Name and value pairs that define
 * the deployment parameters for the template. You use this element when you
 * want to provide the parameter values directly in the request rather than
 * link to an existing parameter file. Use either the parametersLink property
 * or the parameters property, but not both. It can be a JObject or a well
 * formed JSON string.
 * 
 * @member {object} [properties.parametersLink] The URI of parameters file.
 * You use this element to link to an existing parameters file. Use either
 * the parametersLink property or the parameters property, but not both.
 * 
 * @member {string} [properties.parametersLink.uri] The URI of the parameters
 * file.
 * 
 * @member {string} [properties.parametersLink.contentVersion] If included,
 * must match the ContentVersion in the template.
 * 
 * @member {string} [properties.mode] The mode that is used to deploy
 * resources. This value can be either Incremental or Complete. In
 * Incremental mode, resources are deployed without deleting existing
 * resources that are not included in the template. In Complete mode,
 * resources are deployed and existing resources in the resource group that
 * are not included in the template are deleted. Be careful when using
 * Complete mode as you may unintentionally delete resources. Possible values
 * include: 'Incremental', 'Complete'
 * 
 * @member {object} [properties.debugSetting] The debug setting of the
 * deployment.
 * 
 * @member {string} [properties.debugSetting.detailLevel] Specifies the type
 * of information to log for debugging. The permitted values are none,
 * requestContent, responseContent, or both requestContent and
 * responseContent separated by a comma. The default is none. When setting
 * this value, carefully consider the type of information you are passing in
 * during deployment. By logging information about the request or response,
 * you could potentially expose sensitive data that is retrieved through the
 * deployment operations.
 * 
 */
function Deployment() {
}

/**
 * Defines the metadata of Deployment
 *
 * @returns {object} metadata of Deployment
 *
 */
Deployment.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Deployment',
    type: {
      name: 'Composite',
      className: 'Deployment',
      modelProperties: {
        properties: {
          required: false,
          serializedName: 'properties',
          type: {
            name: 'Composite',
            className: 'DeploymentProperties'
          }
        }
      }
    }
  };
};

module.exports = Deployment;
