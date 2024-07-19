/* tslint:disable */
/* eslint-disable */
/**
 * Wikibase REST API
 * OpenAPI definition of Wikibase REST API
 *
 * The version of the OpenAPI document: 0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AddItemAliasesInLanguageRequest
 */
export interface AddItemAliasesInLanguageRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof AddItemAliasesInLanguageRequest
     */
    tags?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof AddItemAliasesInLanguageRequest
     */
    bot?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AddItemAliasesInLanguageRequest
     */
    comment?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AddItemAliasesInLanguageRequest
     */
    aliases: Array<string>;
}

/**
 * Check if a given object implements the AddItemAliasesInLanguageRequest interface.
 */
export function instanceOfAddItemAliasesInLanguageRequest(value: object): value is AddItemAliasesInLanguageRequest {
    if (!('aliases' in value) || value['aliases'] === undefined) return false;
    return true;
}

export function AddItemAliasesInLanguageRequestFromJSON(json: any): AddItemAliasesInLanguageRequest {
    return AddItemAliasesInLanguageRequestFromJSONTyped(json, false);
}

export function AddItemAliasesInLanguageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddItemAliasesInLanguageRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'tags': json['tags'] == null ? undefined : json['tags'],
        'bot': json['bot'] == null ? undefined : json['bot'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'aliases': json['aliases'],
    };
}

export function AddItemAliasesInLanguageRequestToJSON(value?: AddItemAliasesInLanguageRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tags': value['tags'],
        'bot': value['bot'],
        'comment': value['comment'],
        'aliases': value['aliases'],
    };
}
