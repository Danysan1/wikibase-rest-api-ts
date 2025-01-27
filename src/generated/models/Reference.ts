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
import type { Qualifier } from './Qualifier';
import {
    QualifierFromJSON,
    QualifierFromJSONTyped,
    QualifierToJSON,
} from './Qualifier';

/**
 * 
 * @export
 * @interface Reference
 */
export interface Reference {
    /**
     * Hash of the Reference
     * @type {string}
     * @memberof Reference
     */
    readonly hash?: string;
    /**
     * 
     * @type {Array<Qualifier>}
     * @memberof Reference
     */
    parts?: Array<Qualifier>;
}

/**
 * Check if a given object implements the Reference interface.
 */
export function instanceOfReference(value: object): value is Reference {
    return true;
}

export function ReferenceFromJSON(json: any): Reference {
    return ReferenceFromJSONTyped(json, false);
}

export function ReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reference {
    if (json == null) {
        return json;
    }
    return {
        
        'hash': json['hash'] == null ? undefined : json['hash'],
        'parts': json['parts'] == null ? undefined : ((json['parts'] as Array<any>).map(QualifierFromJSON)),
    };
}

export function ReferenceToJSON(value?: Omit<Reference, 'hash'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'parts': value['parts'] == null ? undefined : ((value['parts'] as Array<any>).map(QualifierToJSON)),
    };
}

