/* tslint:disable */
/* eslint-disable */
/**
 * Wikibase REST API
 * OpenAPI definition of Wikibase REST API
 *
 * The version of the OpenAPI document: 1.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AddItem400Response,
  DeleteSitelinkRequest,
  PatchItemRequest,
  ReplaceItemLabelRequest,
} from '../models/index';
import {
    AddItem400ResponseFromJSON,
    AddItem400ResponseToJSON,
    DeleteSitelinkRequestFromJSON,
    DeleteSitelinkRequestToJSON,
    PatchItemRequestFromJSON,
    PatchItemRequestToJSON,
    ReplaceItemLabelRequestFromJSON,
    ReplaceItemLabelRequestToJSON,
} from '../models/index';

export interface DeleteItemLabelRequest {
    itemId: string;
    languageCode: string;
    ifNoneMatch?: Array<string>;
    ifModifiedSince?: string;
    ifMatch?: Array<string>;
    ifUnmodifiedSince?: string;
    authorization?: string;
    deleteSitelinkRequest?: DeleteSitelinkRequest;
}

export interface DeletePropertyLabelRequest {
    propertyId: string;
    languageCode: string;
    ifNoneMatch?: Array<string>;
    ifModifiedSince?: string;
    ifMatch?: Array<string>;
    ifUnmodifiedSince?: string;
    authorization?: string;
    deleteSitelinkRequest?: DeleteSitelinkRequest;
}

export interface GetItemLabelRequest {
    itemId: string;
    languageCode: string;
    ifNoneMatch?: Array<string>;
    ifModifiedSince?: string;
    ifMatch?: Array<string>;
    ifUnmodifiedSince?: string;
    authorization?: string;
}

export interface GetItemLabelWithFallbackRequest {
    itemId: string;
    languageCode: string;
    ifNoneMatch?: Array<string>;
    ifModifiedSince?: string;
    ifMatch?: Array<string>;
    ifUnmodifiedSince?: string;
    authorization?: string;
}

export interface GetItemLabelsRequest {
    itemId: string;
    ifNoneMatch?: Array<string>;
    ifModifiedSince?: string;
    ifMatch?: Array<string>;
    ifUnmodifiedSince?: string;
    authorization?: string;
}

export interface GetPropertyLabelRequest {
    propertyId: string;
    languageCode: string;
    ifNoneMatch?: Array<string>;
    ifModifiedSince?: string;
    ifMatch?: Array<string>;
    ifUnmodifiedSince?: string;
    authorization?: string;
}

export interface GetPropertyLabelWithFallbackRequest {
    propertyId: string;
    languageCode: string;
    ifNoneMatch?: Array<string>;
    ifModifiedSince?: string;
    ifMatch?: Array<string>;
    ifUnmodifiedSince?: string;
    authorization?: string;
}

export interface GetPropertyLabelsRequest {
    propertyId: string;
    ifNoneMatch?: Array<string>;
    ifModifiedSince?: string;
    ifMatch?: Array<string>;
    ifUnmodifiedSince?: string;
    authorization?: string;
}

export interface PatchItemLabelsRequest {
    itemId: string;
    patchItemRequest: PatchItemRequest;
    ifMatch?: Array<string>;
    ifNoneMatch?: Array<string>;
    ifUnmodifiedSince?: string;
}

export interface PatchPropertyLabelsRequest {
    propertyId: string;
    patchItemRequest: PatchItemRequest;
    ifMatch?: Array<string>;
    ifNoneMatch?: Array<string>;
    ifUnmodifiedSince?: string;
}

export interface ReplaceItemLabelOperationRequest {
    itemId: string;
    languageCode: string;
    replaceItemLabelRequest: ReplaceItemLabelRequest;
    ifNoneMatch?: Array<string>;
    ifModifiedSince?: string;
    ifMatch?: Array<string>;
    ifUnmodifiedSince?: string;
    authorization?: string;
}

export interface ReplacePropertyLabelRequest {
    propertyId: string;
    languageCode: string;
    replaceItemLabelRequest: ReplaceItemLabelRequest;
    ifNoneMatch?: Array<string>;
    ifModifiedSince?: string;
    ifMatch?: Array<string>;
    ifUnmodifiedSince?: string;
    authorization?: string;
}

/**
 * 
 */
export class LabelsApi extends runtime.BaseAPI {

    /**
     * Delete an Item\'s label in a specific language
     */
    async deleteItemLabelRaw(requestParameters: DeleteItemLabelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['itemId'] == null) {
            throw new runtime.RequiredError(
                'itemId',
                'Required parameter "itemId" was null or undefined when calling deleteItemLabel().'
            );
        }

        if (requestParameters['languageCode'] == null) {
            throw new runtime.RequiredError(
                'languageCode',
                'Required parameter "languageCode" was null or undefined when calling deleteItemLabel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = requestParameters['ifNoneMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifModifiedSince'] != null) {
            headerParameters['If-Modified-Since'] = String(requestParameters['ifModifiedSince']);
        }

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = requestParameters['ifMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifUnmodifiedSince'] != null) {
            headerParameters['If-Unmodified-Since'] = String(requestParameters['ifUnmodifiedSince']);
        }

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/v1/entities/items/{item_id}/labels/{language_code}`.replace(`{${"item_id"}}`, encodeURIComponent(String(requestParameters['itemId']))).replace(`{${"language_code"}}`, encodeURIComponent(String(requestParameters['languageCode']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteSitelinkRequestToJSON(requestParameters['deleteSitelinkRequest']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Delete an Item\'s label in a specific language
     */
    async deleteItemLabel(requestParameters: DeleteItemLabelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.deleteItemLabelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a Property\'s label in a specific language
     */
    async deletePropertyLabelRaw(requestParameters: DeletePropertyLabelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['propertyId'] == null) {
            throw new runtime.RequiredError(
                'propertyId',
                'Required parameter "propertyId" was null or undefined when calling deletePropertyLabel().'
            );
        }

        if (requestParameters['languageCode'] == null) {
            throw new runtime.RequiredError(
                'languageCode',
                'Required parameter "languageCode" was null or undefined when calling deletePropertyLabel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = requestParameters['ifNoneMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifModifiedSince'] != null) {
            headerParameters['If-Modified-Since'] = String(requestParameters['ifModifiedSince']);
        }

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = requestParameters['ifMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifUnmodifiedSince'] != null) {
            headerParameters['If-Unmodified-Since'] = String(requestParameters['ifUnmodifiedSince']);
        }

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/v1/entities/properties/{property_id}/labels/{language_code}`.replace(`{${"property_id"}}`, encodeURIComponent(String(requestParameters['propertyId']))).replace(`{${"language_code"}}`, encodeURIComponent(String(requestParameters['languageCode']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteSitelinkRequestToJSON(requestParameters['deleteSitelinkRequest']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Delete a Property\'s label in a specific language
     */
    async deletePropertyLabel(requestParameters: DeletePropertyLabelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.deletePropertyLabelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an Item\'s label in a specific language
     */
    async getItemLabelRaw(requestParameters: GetItemLabelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['itemId'] == null) {
            throw new runtime.RequiredError(
                'itemId',
                'Required parameter "itemId" was null or undefined when calling getItemLabel().'
            );
        }

        if (requestParameters['languageCode'] == null) {
            throw new runtime.RequiredError(
                'languageCode',
                'Required parameter "languageCode" was null or undefined when calling getItemLabel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = requestParameters['ifNoneMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifModifiedSince'] != null) {
            headerParameters['If-Modified-Since'] = String(requestParameters['ifModifiedSince']);
        }

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = requestParameters['ifMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifUnmodifiedSince'] != null) {
            headerParameters['If-Unmodified-Since'] = String(requestParameters['ifUnmodifiedSince']);
        }

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/v1/entities/items/{item_id}/labels/{language_code}`.replace(`{${"item_id"}}`, encodeURIComponent(String(requestParameters['itemId']))).replace(`{${"language_code"}}`, encodeURIComponent(String(requestParameters['languageCode']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Retrieve an Item\'s label in a specific language
     */
    async getItemLabel(requestParameters: GetItemLabelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getItemLabelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * If a label is defined in the requested language, the API responds with a 200 status code and includes the label in the response payload. If a label only exists in a fallback language, the API returns a 307 status code and provides the location of the label.
     * Retrieve an Item\'s label in a specific language, with language fallback
     */
    async getItemLabelWithFallbackRaw(requestParameters: GetItemLabelWithFallbackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['itemId'] == null) {
            throw new runtime.RequiredError(
                'itemId',
                'Required parameter "itemId" was null or undefined when calling getItemLabelWithFallback().'
            );
        }

        if (requestParameters['languageCode'] == null) {
            throw new runtime.RequiredError(
                'languageCode',
                'Required parameter "languageCode" was null or undefined when calling getItemLabelWithFallback().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = requestParameters['ifNoneMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifModifiedSince'] != null) {
            headerParameters['If-Modified-Since'] = String(requestParameters['ifModifiedSince']);
        }

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = requestParameters['ifMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifUnmodifiedSince'] != null) {
            headerParameters['If-Unmodified-Since'] = String(requestParameters['ifUnmodifiedSince']);
        }

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/v1/entities/items/{item_id}/labels_with_language_fallback/{language_code}`.replace(`{${"item_id"}}`, encodeURIComponent(String(requestParameters['itemId']))).replace(`{${"language_code"}}`, encodeURIComponent(String(requestParameters['languageCode']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * If a label is defined in the requested language, the API responds with a 200 status code and includes the label in the response payload. If a label only exists in a fallback language, the API returns a 307 status code and provides the location of the label.
     * Retrieve an Item\'s label in a specific language, with language fallback
     */
    async getItemLabelWithFallback(requestParameters: GetItemLabelWithFallbackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getItemLabelWithFallbackRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an Item\'s labels
     */
    async getItemLabelsRaw(requestParameters: GetItemLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: string; }>> {
        if (requestParameters['itemId'] == null) {
            throw new runtime.RequiredError(
                'itemId',
                'Required parameter "itemId" was null or undefined when calling getItemLabels().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = requestParameters['ifNoneMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifModifiedSince'] != null) {
            headerParameters['If-Modified-Since'] = String(requestParameters['ifModifiedSince']);
        }

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = requestParameters['ifMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifUnmodifiedSince'] != null) {
            headerParameters['If-Unmodified-Since'] = String(requestParameters['ifUnmodifiedSince']);
        }

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/v1/entities/items/{item_id}/labels`.replace(`{${"item_id"}}`, encodeURIComponent(String(requestParameters['itemId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieve an Item\'s labels
     */
    async getItemLabels(requestParameters: GetItemLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: string; }> {
        const response = await this.getItemLabelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a Property\'s label in a specific language
     */
    async getPropertyLabelRaw(requestParameters: GetPropertyLabelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['propertyId'] == null) {
            throw new runtime.RequiredError(
                'propertyId',
                'Required parameter "propertyId" was null or undefined when calling getPropertyLabel().'
            );
        }

        if (requestParameters['languageCode'] == null) {
            throw new runtime.RequiredError(
                'languageCode',
                'Required parameter "languageCode" was null or undefined when calling getPropertyLabel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = requestParameters['ifNoneMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifModifiedSince'] != null) {
            headerParameters['If-Modified-Since'] = String(requestParameters['ifModifiedSince']);
        }

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = requestParameters['ifMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifUnmodifiedSince'] != null) {
            headerParameters['If-Unmodified-Since'] = String(requestParameters['ifUnmodifiedSince']);
        }

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/v1/entities/properties/{property_id}/labels/{language_code}`.replace(`{${"property_id"}}`, encodeURIComponent(String(requestParameters['propertyId']))).replace(`{${"language_code"}}`, encodeURIComponent(String(requestParameters['languageCode']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Retrieve a Property\'s label in a specific language
     */
    async getPropertyLabel(requestParameters: GetPropertyLabelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getPropertyLabelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * If a label is defined in the requested language, the API responds with a 200 status code and includes the label in the response payload. If a label only exists in a fallback language, the API returns a 307 status code and provides the location of the label.
     * Retrieve a Property\'s label in a specific language, with language fallback
     */
    async getPropertyLabelWithFallbackRaw(requestParameters: GetPropertyLabelWithFallbackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['propertyId'] == null) {
            throw new runtime.RequiredError(
                'propertyId',
                'Required parameter "propertyId" was null or undefined when calling getPropertyLabelWithFallback().'
            );
        }

        if (requestParameters['languageCode'] == null) {
            throw new runtime.RequiredError(
                'languageCode',
                'Required parameter "languageCode" was null or undefined when calling getPropertyLabelWithFallback().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = requestParameters['ifNoneMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifModifiedSince'] != null) {
            headerParameters['If-Modified-Since'] = String(requestParameters['ifModifiedSince']);
        }

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = requestParameters['ifMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifUnmodifiedSince'] != null) {
            headerParameters['If-Unmodified-Since'] = String(requestParameters['ifUnmodifiedSince']);
        }

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/v1/entities/properties/{property_id}/labels_with_language_fallback/{language_code}`.replace(`{${"property_id"}}`, encodeURIComponent(String(requestParameters['propertyId']))).replace(`{${"language_code"}}`, encodeURIComponent(String(requestParameters['languageCode']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * If a label is defined in the requested language, the API responds with a 200 status code and includes the label in the response payload. If a label only exists in a fallback language, the API returns a 307 status code and provides the location of the label.
     * Retrieve a Property\'s label in a specific language, with language fallback
     */
    async getPropertyLabelWithFallback(requestParameters: GetPropertyLabelWithFallbackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getPropertyLabelWithFallbackRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a Property\'s labels
     */
    async getPropertyLabelsRaw(requestParameters: GetPropertyLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: string; }>> {
        if (requestParameters['propertyId'] == null) {
            throw new runtime.RequiredError(
                'propertyId',
                'Required parameter "propertyId" was null or undefined when calling getPropertyLabels().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = requestParameters['ifNoneMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifModifiedSince'] != null) {
            headerParameters['If-Modified-Since'] = String(requestParameters['ifModifiedSince']);
        }

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = requestParameters['ifMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifUnmodifiedSince'] != null) {
            headerParameters['If-Unmodified-Since'] = String(requestParameters['ifUnmodifiedSince']);
        }

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/v1/entities/properties/{property_id}/labels`.replace(`{${"property_id"}}`, encodeURIComponent(String(requestParameters['propertyId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieve a Property\'s labels
     */
    async getPropertyLabels(requestParameters: GetPropertyLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: string; }> {
        const response = await this.getPropertyLabelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Change an Item\'s Labels
     */
    async patchItemLabelsRaw(requestParameters: PatchItemLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: string; }>> {
        if (requestParameters['itemId'] == null) {
            throw new runtime.RequiredError(
                'itemId',
                'Required parameter "itemId" was null or undefined when calling patchItemLabels().'
            );
        }

        if (requestParameters['patchItemRequest'] == null) {
            throw new runtime.RequiredError(
                'patchItemRequest',
                'Required parameter "patchItemRequest" was null or undefined when calling patchItemLabels().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = requestParameters['ifMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = requestParameters['ifNoneMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifUnmodifiedSince'] != null) {
            headerParameters['If-Unmodified-Since'] = String(requestParameters['ifUnmodifiedSince']);
        }

        const response = await this.request({
            path: `/v1/entities/items/{item_id}/labels`.replace(`{${"item_id"}}`, encodeURIComponent(String(requestParameters['itemId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchItemRequestToJSON(requestParameters['patchItemRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Change an Item\'s Labels
     */
    async patchItemLabels(requestParameters: PatchItemLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: string; }> {
        const response = await this.patchItemLabelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Change a Property\'s Labels
     */
    async patchPropertyLabelsRaw(requestParameters: PatchPropertyLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: string; }>> {
        if (requestParameters['propertyId'] == null) {
            throw new runtime.RequiredError(
                'propertyId',
                'Required parameter "propertyId" was null or undefined when calling patchPropertyLabels().'
            );
        }

        if (requestParameters['patchItemRequest'] == null) {
            throw new runtime.RequiredError(
                'patchItemRequest',
                'Required parameter "patchItemRequest" was null or undefined when calling patchPropertyLabels().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = requestParameters['ifMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = requestParameters['ifNoneMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifUnmodifiedSince'] != null) {
            headerParameters['If-Unmodified-Since'] = String(requestParameters['ifUnmodifiedSince']);
        }

        const response = await this.request({
            path: `/v1/entities/properties/{property_id}/labels`.replace(`{${"property_id"}}`, encodeURIComponent(String(requestParameters['propertyId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchItemRequestToJSON(requestParameters['patchItemRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Change a Property\'s Labels
     */
    async patchPropertyLabels(requestParameters: PatchPropertyLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: string; }> {
        const response = await this.patchPropertyLabelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add / Replace an Item\'s label in a specific language
     */
    async replaceItemLabelRaw(requestParameters: ReplaceItemLabelOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['itemId'] == null) {
            throw new runtime.RequiredError(
                'itemId',
                'Required parameter "itemId" was null or undefined when calling replaceItemLabel().'
            );
        }

        if (requestParameters['languageCode'] == null) {
            throw new runtime.RequiredError(
                'languageCode',
                'Required parameter "languageCode" was null or undefined when calling replaceItemLabel().'
            );
        }

        if (requestParameters['replaceItemLabelRequest'] == null) {
            throw new runtime.RequiredError(
                'replaceItemLabelRequest',
                'Required parameter "replaceItemLabelRequest" was null or undefined when calling replaceItemLabel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = requestParameters['ifNoneMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifModifiedSince'] != null) {
            headerParameters['If-Modified-Since'] = String(requestParameters['ifModifiedSince']);
        }

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = requestParameters['ifMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifUnmodifiedSince'] != null) {
            headerParameters['If-Unmodified-Since'] = String(requestParameters['ifUnmodifiedSince']);
        }

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/v1/entities/items/{item_id}/labels/{language_code}`.replace(`{${"item_id"}}`, encodeURIComponent(String(requestParameters['itemId']))).replace(`{${"language_code"}}`, encodeURIComponent(String(requestParameters['languageCode']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ReplaceItemLabelRequestToJSON(requestParameters['replaceItemLabelRequest']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Add / Replace an Item\'s label in a specific language
     */
    async replaceItemLabel(requestParameters: ReplaceItemLabelOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.replaceItemLabelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add / Replace a Property\'s label in a specific language
     */
    async replacePropertyLabelRaw(requestParameters: ReplacePropertyLabelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['propertyId'] == null) {
            throw new runtime.RequiredError(
                'propertyId',
                'Required parameter "propertyId" was null or undefined when calling replacePropertyLabel().'
            );
        }

        if (requestParameters['languageCode'] == null) {
            throw new runtime.RequiredError(
                'languageCode',
                'Required parameter "languageCode" was null or undefined when calling replacePropertyLabel().'
            );
        }

        if (requestParameters['replaceItemLabelRequest'] == null) {
            throw new runtime.RequiredError(
                'replaceItemLabelRequest',
                'Required parameter "replaceItemLabelRequest" was null or undefined when calling replacePropertyLabel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = requestParameters['ifNoneMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifModifiedSince'] != null) {
            headerParameters['If-Modified-Since'] = String(requestParameters['ifModifiedSince']);
        }

        if (requestParameters['ifMatch'] != null) {
            headerParameters['If-Match'] = requestParameters['ifMatch']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['ifUnmodifiedSince'] != null) {
            headerParameters['If-Unmodified-Since'] = String(requestParameters['ifUnmodifiedSince']);
        }

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        const response = await this.request({
            path: `/v1/entities/properties/{property_id}/labels/{language_code}`.replace(`{${"property_id"}}`, encodeURIComponent(String(requestParameters['propertyId']))).replace(`{${"language_code"}}`, encodeURIComponent(String(requestParameters['languageCode']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ReplaceItemLabelRequestToJSON(requestParameters['replaceItemLabelRequest']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Add / Replace a Property\'s label in a specific language
     */
    async replacePropertyLabel(requestParameters: ReplacePropertyLabelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.replacePropertyLabelRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
