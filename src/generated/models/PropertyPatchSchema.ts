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
 * @interface PropertyPatchSchema
 */
export interface PropertyPatchSchema {
    /**
     * 
     * @type {any}
     * @memberof PropertyPatchSchema
     */
    patch: any | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PropertyPatchSchema
     */
    tags?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof PropertyPatchSchema
     */
    bot?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PropertyPatchSchema
     */
    comment?: string;
}

/**
 * Check if a given object implements the PropertyPatchSchema interface.
 */
export function instanceOfPropertyPatchSchema(value: object): value is PropertyPatchSchema {
    if (!('patch' in value) || value['patch'] === undefined) return false;
    return true;
}

export function PropertyPatchSchemaFromJSON(json: any): PropertyPatchSchema {
    return PropertyPatchSchemaFromJSONTyped(json, false);
}

export function PropertyPatchSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyPatchSchema {
    if (json == null) {
        return json;
    }
    return {
        
        'patch': json['patch'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'bot': json['bot'] == null ? undefined : json['bot'],
        'comment': json['comment'] == null ? undefined : json['comment'],
    };
}

export function PropertyPatchSchemaToJSON(value?: PropertyPatchSchema | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'patch': value['patch'],
        'tags': value['tags'],
        'bot': value['bot'],
        'comment': value['comment'],
    };
}

