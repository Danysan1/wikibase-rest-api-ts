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
 * @interface SetSitelinkRequestAllOfSitelink
 */
export interface SetSitelinkRequestAllOfSitelink {
    /**
     * 
     * @type {string}
     * @memberof SetSitelinkRequestAllOfSitelink
     */
    title: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SetSitelinkRequestAllOfSitelink
     */
    badges?: Array<string>;
}

/**
 * Check if a given object implements the SetSitelinkRequestAllOfSitelink interface.
 */
export function instanceOfSetSitelinkRequestAllOfSitelink(value: object): value is SetSitelinkRequestAllOfSitelink {
    if (!('title' in value) || value['title'] === undefined) return false;
    return true;
}

export function SetSitelinkRequestAllOfSitelinkFromJSON(json: any): SetSitelinkRequestAllOfSitelink {
    return SetSitelinkRequestAllOfSitelinkFromJSONTyped(json, false);
}

export function SetSitelinkRequestAllOfSitelinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetSitelinkRequestAllOfSitelink {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'badges': json['badges'] == null ? undefined : json['badges'],
    };
}

export function SetSitelinkRequestAllOfSitelinkToJSON(value?: SetSitelinkRequestAllOfSitelink | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'badges': value['badges'],
    };
}

