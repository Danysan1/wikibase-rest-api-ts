export const API_BASE_PATH = "https://test.wikidata.org/w/rest.php/wikibase/v0",
    BEARER_TOKEN = process.env.WB_BEARER_TOKEN, // <-- Pass a bearer token to run all tests
    INSTANCE_PROPERTY = "P82";

// https://test.wikidata.org/wiki/Q235103#Q235103$b88c2bef-4d9f-4a77-c857-5d201d828ff1
export const ENTITY = "Q235103",
    ENTITY_LABEL = "wikibase-rest-api-ts test entity",
    ENTITY_DESCRIPTION = "test entity for https://www.npmjs.com/package/wikibase-rest-api-ts",
    ENTITY_ALIAS = "qQ0\\|\"£$%&/()=?^ìèé[]+*òç@à°#§ù,.-;:_<>",
    ENTITY_INSTANCE_VALUE = "Q1979",
    ENTITY_INSTANCE_ID = "Q235103$b88c2bef-4d9f-4a77-c857-5d201d828ff1";

// https://test.wikidata.org/wiki/Property:P98344#P98344$a3d7ddff-4dd1-5a09-f89e-39830eb4b733
export const PROPERTY = "P98344",
    PROPERTY_LABEL = "wikibase-rest-api-ts test property",
    PROPERTY_DESCRIPTION = "test entity for https://www.npmjs.com/package/wikibase-rest-api-ts",
    PROPERTY_ALIAS = "qQ0\\|\"£$%&/()=?^ìèé[]+*òç@à°#§ù,.-;:_<>",
    PROPERTY_INSTANCE_VALUE = "Q187963",
    PROPERTY_INSTANCE_ID = "P98344$a3d7ddff-4dd1-5a09-f89e-39830eb4b733";
