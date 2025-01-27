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
 * @interface Sitelink
 */
export interface Sitelink {
    /**
     * 
     * @type {string}
     * @memberof Sitelink
     */
    title?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Sitelink
     */
    badges?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Sitelink
     */
    url?: string;
}

/**
 * Check if a given object implements the Sitelink interface.
 */
export function instanceOfSitelink(value: object): value is Sitelink {
    return true;
}

export function SitelinkFromJSON(json: any): Sitelink {
    return SitelinkFromJSONTyped(json, false);
}

export function SitelinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sitelink {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'badges': json['badges'] == null ? undefined : json['badges'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function SitelinkToJSON(value?: Sitelink | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'badges': value['badges'],
        'url': value['url'],
    };
}

