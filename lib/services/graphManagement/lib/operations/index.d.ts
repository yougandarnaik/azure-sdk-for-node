/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * ApplicationOperations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the GraphRbacManagementClient.
 */
export interface ApplicationOperations {

    /**
     * Create a new application. Reference:
     * http://msdn.microsoft.com/en-us/library/azure/hh974476.aspx
     *
     * @param {object} parameters Parameters to create an application.
     * 
     * @param {boolean} [parameters.availableToOtherTenants] Indicates if the
     * application will be available to other tenants
     * 
     * @param {string} [parameters.displayName] Application display name
     * 
     * @param {string} [parameters.homepage] Application homepage
     * 
     * @param {array} [parameters.identifierUris] Application Uris
     * 
     * @param {array} [parameters.replyUrls] Application reply Urls
     * 
     * @param {array} [parameters.keyCredentials] Gets or sets the list of
     * KeyCredential objects
     * 
     * @param {array} [parameters.passwordCredentials] Gets or sets the list of
     * PasswordCredential objects
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    create(parameters: models.ApplicationCreateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Application>): void;
    create(parameters: models.ApplicationCreateParameters, callback: ServiceCallback<models.Application>): void;

    /**
     * Lists applications by filter parameters. Reference:
     * http://msdn.microsoft.com/en-us/library/azure/hh974476.aspx
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filters to apply on the operation
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ApplicationListResult>): void;
    list(callback: ServiceCallback<models.ApplicationListResult>): void;

    /**
     * Delete an application. Reference:
     * http://msdn.microsoft.com/en-us/library/azure/hh974476.aspx
     *
     * @param {string} applicationObjectId Application object id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(applicationObjectId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(applicationObjectId: string, callback: ServiceCallback<void>): void;

    /**
     * Get an application by object Id. Reference:
     * http://msdn.microsoft.com/en-us/library/azure/hh974476.aspx
     *
     * @param {string} applicationObjectId Application object id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(applicationObjectId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Application>): void;
    get(applicationObjectId: string, callback: ServiceCallback<models.Application>): void;

    /**
     * Update existing application. Reference:
     * http://msdn.microsoft.com/en-us/library/azure/hh974476.aspx
     *
     * @param {string} applicationObjectId Application object id
     * 
     * @param {object} parameters Parameters to create an application.
     * 
     * @param {boolean} [parameters.availableToOtherTenants] Indicates if the
     * application will be available to other tenants
     * 
     * @param {string} [parameters.displayName] Application display name
     * 
     * @param {string} [parameters.homepage] Application homepage
     * 
     * @param {array} [parameters.identifierUris] Application Uris
     * 
     * @param {array} [parameters.replyUrls] Application reply Urls
     * 
     * @param {array} [parameters.keyCredentials] Gets or sets the list of
     * KeyCredential objects
     * 
     * @param {array} [parameters.passwordCredentials] Gets or sets the list of
     * PasswordCredential objects
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    patch(applicationObjectId: string, parameters: models.ApplicationCreateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    patch(applicationObjectId: string, parameters: models.ApplicationCreateParameters, callback: ServiceCallback<void>): void;
}

/**
 * @class
 * ObjectOperations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the GraphRbacManagementClient.
 */
export interface ObjectOperations {

    /**
     * Gets the details for current logged in user
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getCurrentUser(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AADObject>): void;
    getCurrentUser(callback: ServiceCallback<models.AADObject>): void;

    /**
     * Gets AD group membership by provided AD object Ids
     *
     * @param {object} parameters Objects filtering parameters.
     * 
     * @param {array} [parameters.objectIds] Requested object Ids
     * 
     * @param {array} [parameters.types] Requested object types
     * 
     * @param {boolean} [parameters.includeDirectoryObjectReferences] If true,
     * also searches for object ids in the partner tenant
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getObjectsByObjectIds(parameters: models.GetObjectsParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GetObjectsResult>): void;
    getObjectsByObjectIds(parameters: models.GetObjectsParameters, callback: ServiceCallback<models.GetObjectsResult>): void;

    /**
     * Gets AD group membership by provided AD object Ids
     *
     * @param {string} nextLink Next link for list operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getObjectsByObjectIdsNext(nextLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GetObjectsResult>): void;
    getObjectsByObjectIdsNext(nextLink: string, callback: ServiceCallback<models.GetObjectsResult>): void;
}

/**
 * @class
 * GroupOperations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the GraphRbacManagementClient.
 */
export interface GroupOperations {

    /**
     * Remove a memeber from a group. Reference:
     * http://msdn.microsoft.com/en-us/library/azure/dn151607.aspx
     *
     * @param {string} groupObjectId Group object id
     * 
     * @param {string} memberObjectId Member Object id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    removeMember(groupObjectId: string, memberObjectId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    removeMember(groupObjectId: string, memberObjectId: string, callback: ServiceCallback<void>): void;

    /**
     * Add a memeber to a group. Reference:
     * http://msdn.microsoft.com/en-us/library/azure/dn151676.aspx
     *
     * @param {string} groupObjectId Group object id
     * 
     * @param {string} url Group display name
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    addMember(groupObjectId: string, url: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    addMember(groupObjectId: string, url: string, callback: ServiceCallback<void>): void;

    /**
     * Delete a group in the directory. Reference:
     * http://msdn.microsoft.com/en-us/library/azure/dn151676.aspx
     *
     * @param {string} groupObjectId Object id
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(groupObjectId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(groupObjectId: string, callback: ServiceCallback<void>): void;

    /**
     * Create a group in the directory. Reference:
     * http://msdn.microsoft.com/en-us/library/azure/dn151676.aspx
     *
     * @param {object} parameters Parameters to create a group
     * 
     * @param {string} [parameters.displayName] Group display name
     * 
     * @param {boolean} [parameters.mailEnabled] Mail
     * 
     * @param {string} [parameters.mailNickname] Mail nick name
     * 
     * @param {boolean} [parameters.securityEnabled] Is security enabled
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    create(parameters: models.GroupCreateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ADGroup>): void;
    create(parameters: models.GroupCreateParameters, callback: ServiceCallback<models.ADGroup>): void;

    /**
     * Gets list of groups for the current tenant.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filter to apply on the operation.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GroupListResult>): void;
    list(callback: ServiceCallback<models.GroupListResult>): void;

    /**
     * Gets the members of a group.
     *
     * @param {string} objectId Group object Id who's members should be retrieved.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getGroupMembers(objectId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GetObjectsResult>): void;
    getGroupMembers(objectId: string, callback: ServiceCallback<models.GetObjectsResult>): void;

    /**
     * Gets group information from the directory.
     *
     * @param {string} objectId User objectId to get group information.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(objectId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ADGroup>): void;
    get(objectId: string, callback: ServiceCallback<models.ADGroup>): void;

    /**
     * Gets a collection that contains the Object IDs of the groups of which the
     * group is a member.
     *
     * @param {string} objectId Group filtering parameters.
     * 
     * @param {boolean} securityEnabledOnly If true only membership in security
     * enabled groups should be checked. Otherwise membership in all groups
     * should be checked
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getMemberGroups(objectId: string, securityEnabledOnly: boolean, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GroupGetMemberGroupsResult>): void;
    getMemberGroups(objectId: string, securityEnabledOnly: boolean, callback: ServiceCallback<models.GroupGetMemberGroupsResult>): void;

    /**
     * Gets list of groups for the current tenant.
     *
     * @param {string} nextLink Next link for list operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GroupListResult>): void;
    listNext(nextLink: string, callback: ServiceCallback<models.GroupListResult>): void;

    /**
     * Gets the members of a group.
     *
     * @param {string} nextLink Next link for list operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getGroupMembersNext(nextLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GetObjectsResult>): void;
    getGroupMembersNext(nextLink: string, callback: ServiceCallback<models.GetObjectsResult>): void;
}

/**
 * @class
 * ServicePrincipalOperations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the GraphRbacManagementClient.
 */
export interface ServicePrincipalOperations {

    /**
     * Creates a service principal in the  directory.
     *
     * @param {object} parameters Parameters to create a service principal.
     * 
     * @param {string} [parameters.appId] Gets or sets application Id
     * 
     * @param {boolean} [parameters.accountEnabled] Specifies if the account is
     * enabled
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    create(parameters: models.ServicePrincipalCreateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ServicePrincipal>): void;
    create(parameters: models.ServicePrincipalCreateParameters, callback: ServiceCallback<models.ServicePrincipal>): void;

    /**
     * Gets list of service principals from the current tenant.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filter to apply on the operation.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ServicePrincipalListResult>): void;
    list(callback: ServiceCallback<models.ServicePrincipalListResult>): void;

    /**
     * Deletes service principal from the directory.
     *
     * @param {string} objectId Object id to delete service principal information.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(objectId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(objectId: string, callback: ServiceCallback<void>): void;

    /**
     * Gets service principal information from the directory.
     *
     * @param {string} objectId Object id to get service principal information.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(objectId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ServicePrincipal>): void;
    get(objectId: string, callback: ServiceCallback<models.ServicePrincipal>): void;

    /**
     * Gets list of service principals from the current tenant.
     *
     * @param {string} nextLink Next link for list operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ServicePrincipalListResult>): void;
    listNext(nextLink: string, callback: ServiceCallback<models.ServicePrincipalListResult>): void;
}

/**
 * @class
 * UserOperations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the GraphRbacManagementClient.
 */
export interface UserOperations {

    /**
     * Delete a user. Reference:
     * http://msdn.microsoft.com/en-us/library/azure/dn151676.aspx
     *
     * @param {string} user user object id or user principal name
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(user: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(user: string, callback: ServiceCallback<void>): void;

    /**
     * Create a new user. Reference:
     * http://msdn.microsoft.com/en-us/library/azure/dn151676.aspx
     *
     * @param {object} parameters Parameters to create a user.
     * 
     * @param {string} [parameters.userPrincipalName] User Principal Name
     * 
     * @param {boolean} [parameters.accountEnabled] Enable the account
     * 
     * @param {string} [parameters.displayName] User display name
     * 
     * @param {string} [parameters.mailNickname] Mail nick name
     * 
     * @param {object} [parameters.passwordProfile] Password Profile
     * 
     * @param {string} [parameters.passwordProfile.password] Password
     * 
     * @param {boolean} [parameters.passwordProfile.forceChangePasswordNextLogin]
     * Force change password on next login
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    create(parameters: models.UserCreateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.User>): void;
    create(parameters: models.UserCreateParameters, callback: ServiceCallback<models.User>): void;

    /**
     * Gets list of users for the current tenant.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] The filter to apply on the operation.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UserListResult>): void;
    list(callback: ServiceCallback<models.UserListResult>): void;

    /**
     * Gets user information from the directory. Reference:
     * http://msdn.microsoft.com/en-us/library/azure/dn151676.aspx
     *
     * @param {string} upnOrObjectId User object Id or user principal name to get
     * user information.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(upnOrObjectId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.User>): void;
    get(upnOrObjectId: string, callback: ServiceCallback<models.User>): void;

    /**
     * Gets a collection that contains the Object IDs of the groups of which the
     * user is a member.
     *
     * @param {string} objectId User filtering parameters.
     * 
     * @param {boolean} securityEnabledOnly If true only membership in security
     * enabled groups should be checked. Otherwise membership in all groups
     * should be checked
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getMemberGroups(objectId: string, securityEnabledOnly: boolean, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UserGetMemberGroupsResult>): void;
    getMemberGroups(objectId: string, securityEnabledOnly: boolean, callback: ServiceCallback<models.UserGetMemberGroupsResult>): void;

    /**
     * Gets list of users for the current tenant.
     *
     * @param {string} nextLink Next link for list operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UserListResult>): void;
    listNext(nextLink: string, callback: ServiceCallback<models.UserListResult>): void;
}
