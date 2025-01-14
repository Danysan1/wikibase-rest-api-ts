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
 * @interface ReplaceItemDescriptionRequest
 */
export interface ReplaceItemDescriptionRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof ReplaceItemDescriptionRequest
     */
    tags?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ReplaceItemDescriptionRequest
     */
    bot?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReplaceItemDescriptionRequest
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof ReplaceItemDescriptionRequest
     */
    description: string;
}

/**
 * Check if a given object implements the ReplaceItemDescriptionRequest interface.
 */
export function instanceOfReplaceItemDescriptionRequest(value: object): value is ReplaceItemDescriptionRequest {
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function ReplaceItemDescriptionRequestFromJSON(json: any): ReplaceItemDescriptionRequest {
    return ReplaceItemDescriptionRequestFromJSONTyped(json, false);
}

export function ReplaceItemDescriptionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReplaceItemDescriptionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'tags': json['tags'] == null ? undefined : json['tags'],
        'bot': json['bot'] == null ? undefined : json['bot'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'description': json['description'],
    };
}

export function ReplaceItemDescriptionRequestToJSON(value?: ReplaceItemDescriptionRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tags': value['tags'],
        'bot': value['bot'],
        'comment': value['comment'],
        'description': value['description'],
    };
}

